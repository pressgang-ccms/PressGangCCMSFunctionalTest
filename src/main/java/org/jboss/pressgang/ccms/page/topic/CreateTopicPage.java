package org.jboss.pressgang.ccms.page.topic;

import lombok.extern.slf4j.Slf4j;
import org.jboss.pressgang.ccms.page.AbstractPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.Collections;
import java.util.List;

import static org.jboss.pressgang.ccms.util.Constants.findDivButtonNamesByHtmlFaceText;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@Slf4j
public class CreateTopicPage extends AbstractPage {

    private List<WebElement> topActionPanelMenuItems = Collections.emptyList();
    private List<String> topActionPanelMenuItemNames = Collections.emptyList();

    @FindBy(id = "TopActionPanel")
    private WebElement topActionPanelMenu;

    public CreateTopicPage(WebDriver driver) {
        super(driver);
        topActionPanelMenuItems = topActionPanelMenu.findElements(By.className("gwt-PushButton"));
        topActionPanelMenuItemNames = getNavigationMenuItemNames(topActionPanelMenuItems, findDivButtonNamesByHtmlFaceText());
    }

    public SaveTopicDialog clickSave() {
        return goToMenuPage("Save", SaveTopicDialog.class, topActionPanelMenuItems, topActionPanelMenuItemNames);
    }

    public PropertiesPane goToPropertiesPane() {
        return goToMenuPage("Properties", PropertiesPane.class, topActionPanelMenuItems, topActionPanelMenuItemNames);
    }

    public XmlEditingPane goToXmlEditingPane() {
        return goToMenuPage("XML Editing", XmlEditingPane.class, topActionPanelMenuItems, topActionPanelMenuItemNames);
    }

    // TODO model search results part of the page

    // TODO provide a way to get ids of created topics
}
