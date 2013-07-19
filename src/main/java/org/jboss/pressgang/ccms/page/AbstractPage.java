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

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Slf4j
public class AbstractPage {
    private final WebDriver driver;
    private final FluentWait<WebDriver> ajaxWaitForTenSec;
    private List<WebElement> shortcutMenuItems = Collections.emptyList();

    @FindBy(className = "ShortcutPanel")
    WebElement shortcutMenu;

    public AbstractPage(final WebDriver driver) {
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 10), this);
        this.driver = driver;
        ajaxWaitForTenSec = WebElementUtil.waitForTenSeconds(driver);
        shortcutMenuItems = shortcutMenu.findElements(By.className("gwt-PushButton"));
    }

    public WebDriver getDriver() {
        return driver;
    }

    public String getTitle() {
        return driver.getTitle();
    }

    public List<String> getNavigationMenuItems() {
        Collection<String> menuItemTexts = Collections2.transform(shortcutMenuItems, new Function<WebElement, String>() {
            @Override
            public String apply(WebElement div) {
                return (div.findElement(By.className("html-face")).getText());
            }
        });
        return ImmutableList.copyOf(menuItemTexts);
    }

    public <P> P goToPage(String menuItemText, Class<P> pageClass) {
        log.info("click {} and go to page {}", menuItemText, pageClass.getName());
        List<String> navigationMenuItems = getNavigationMenuItems();
        int menuItemIndex = navigationMenuItems.indexOf(menuItemText);

        Preconditions.checkState(menuItemIndex >= 0, menuItemText + " is not available in navigation menu");

        shortcutMenuItems.get(menuItemIndex).click();
        return PageFactory.initElements(driver, pageClass);
    }

    public <P> P goToUrl(String url, P page) {
        log.info("go to url: {}", url);
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
