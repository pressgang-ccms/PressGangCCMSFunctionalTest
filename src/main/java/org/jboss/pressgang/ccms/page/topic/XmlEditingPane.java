package org.jboss.pressgang.ccms.page.topic;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
public class XmlEditingPane extends CreateTopicPage {

    @FindBy(className = "ace_text-input")
    private WebElement topicInputTextArea;

    public XmlEditingPane(WebDriver driver) {
        super(driver);
    }

    public XmlEditingPane inputXml(String xml) {
        topicInputTextArea.clear();
        topicInputTextArea.sendKeys(xml);
        return this;
    }
}
