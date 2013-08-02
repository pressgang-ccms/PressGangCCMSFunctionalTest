package org.jboss.pressgang.ccms.page.topic;

import lombok.extern.slf4j.Slf4j;
import org.jboss.pressgang.ccms.page.AbstractPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static com.google.common.base.Strings.isNullOrEmpty;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@Slf4j
public class CreateTopicPage extends AbstractPage {

    private String lastCreatedTopicId = "";

    @FindBy(id = "XMLEditingTopicEditButton")
    private WebElement xmlEditingButton;

    @FindBy(id = "PropertiesTopicEditButton")
    private WebElement propertiesButton;

    @FindBy(id = "SaveTopicEditButton")
    private WebElement saveButton;

    public CreateTopicPage(WebDriver driver) {
        super(driver);
    }

    public SaveTopicDialog clickSave() {
        saveButton.click();
        return new SaveTopicDialog<CreateTopicPage>(getDriver(), this);
    }

    public PropertiesPane goToPropertiesPane() {
        propertiesButton.click();
        return new PropertiesPane(getDriver());
    }

    public XmlEditingPane goToXmlEditingPane() {
        xmlEditingButton.click();
        return new XmlEditingPane(getDriver());
    }

    public CreateTopicPage setLastCreatedTopicId(String id) {
        if (!isNullOrEmpty(id)) {
            lastCreatedTopicId = id;
        }
        return this;
    }

    public String getLastCreatedTopicId() {
        return lastCreatedTopicId;
    }
}
