/*
 * Copyright 2010, Red Hat, Inc. and individual contributors as indicated by the
 * @author tags. See the copyright.txt file in the distribution for a full
 * listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This software is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this software; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA, or see the FSF
 * site: http://www.fsf.org.
 */

package org.jboss.pressgang.ccms.page;

import com.google.common.base.Function;
import com.google.common.base.Optional;
import com.google.common.base.Preconditions;
import com.google.common.base.Predicate;
import com.google.common.collect.Collections2;
import com.google.common.collect.ImmutableList;
import lombok.extern.slf4j.Slf4j;
import org.jboss.pressgang.ccms.util.WebElementUtil;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.FluentWait;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static org.jboss.pressgang.ccms.util.Constants.findDivButtonNamesByHtmlFaceText;

@Slf4j
public class AbstractPage {
    private final WebDriver driver;
    private final FluentWait<WebDriver> ajaxWaitForTenSec;
    private List<WebElement> shortcutMenuItems = Collections.emptyList();
    private Optional<List<String>> menuItemTexts = Optional.absent();

    @FindBy(className = "ShortcutPanel")
    WebElement shortcutMenu;

    public AbstractPage(final WebDriver driver) {
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 10), this);
        this.driver = driver;
        ajaxWaitForTenSec = WebElementUtil.waitForTenSeconds(driver);
        //TODO get IDs added for top panel items or adapt to new structure
    }

    public WebDriver getDriver() {
        return driver;
    }

    public String getTitle() {
        return driver.getTitle();
    }

    public <T> List<T> getNavigationMenuItemNames(List<WebElement> menuItems, Function<WebElement, T> transformFunction) {
        Collection<T> result = Collections2.transform(menuItems, transformFunction);
        return ImmutableList.copyOf(result);
    }

    public <P> P goToMenuPage(String menuItemText, Class<P> pageClass, List<WebElement> menuItems,
                              List<String> navigationMenuItemNames) {
        log.info("Click {} and go to page {}", menuItemText, pageClass.getName());
        int menuItemIndex = navigationMenuItemNames.indexOf(menuItemText);

        Preconditions.checkState(menuItemIndex >= 0, menuItemText + " is not available in navigation menu");

        menuItems.get(menuItemIndex).click();
        return PageFactory.initElements(driver, pageClass);
    }

    public List<String> getMainNavigationMenuItemNames() {
        if (!menuItemTexts.isPresent()) {
            List<String> resultList = getNavigationMenuItemNames(shortcutMenuItems, findDivButtonNamesByHtmlFaceText());
            menuItemTexts = Optional.of(resultList);
            return resultList;
        }
        return menuItemTexts.get();
    }

    public <P> P gotToMainMenuPage(String menuItemText, Class<P> pageClass) {
        return goToMenuPage(menuItemText, pageClass, shortcutMenuItems, getMainNavigationMenuItemNames());
    }

    public <P> P goToUrl(String url, P page) {
        log.info("Go to url: {}", url);
        driver.get(url);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 30), page);
        return page;
    }

    public FluentWait<WebDriver> waitForTenSec() {
        return ajaxWaitForTenSec;
    }

    protected <P extends AbstractPage> P refreshPageUntil(P currentPage, Predicate<WebDriver> predicate) {
        waitForTenSec().until(predicate);
        PageFactory.initElements(driver, currentPage);
        return currentPage;
    }

    protected <P extends AbstractPage, T> T refreshPageUntil(P currentPage, Function<WebDriver, T> function) {
        T done = waitForTenSec().until(function);
        PageFactory.initElements(driver, currentPage);
        return done;
    }
}
