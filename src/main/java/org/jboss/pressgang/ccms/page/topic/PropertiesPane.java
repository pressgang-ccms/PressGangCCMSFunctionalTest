package org.jboss.pressgang.ccms.page.topic;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
public class PropertiesPane extends CreateTopicPage {

    @FindBy(className = "TopicViewTitleField")
    private WebElement topicTitleInput;

    public PropertiesPane(WebDriver driver) {
        super(driver);
    }

    public PropertiesPane inputTopicTitle(String title) {
        topicTitleInput.clear();
        topicTitleInput.sendKeys(title);
        return this;
    }
}
