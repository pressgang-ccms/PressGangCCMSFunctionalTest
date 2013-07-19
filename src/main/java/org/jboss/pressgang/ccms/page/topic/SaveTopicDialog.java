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
public class SaveTopicDialog extends AbstractPage {

    private List<WebElement> actionButtons = Collections.emptyList();
    private List<String> actionButtonNames = Collections.emptyList();

    @FindBy(className = "DialogBoxOKCancelPanel")
    private WebElement dialogBoxButtonPanel;

    @FindBy(xpath = "//div[@class='gwt-DialogBox']//textarea[@class='gwt-TextArea'")
    private WebElement messageInput;

    @FindBy(xpath = "//div[@class='gwt-DialogBox']//input[@class='gwt-TextBox'")
    private WebElement userInput;

    @FindBy(id = "gwt-uid-1")
    private WebElement minorChangeRadioButton;

    @FindBy(id = "gwt-uid-2")
    private WebElement majorChangeRadioButton;

    public SaveTopicDialog(WebDriver driver) {
        super(driver);
        actionButtons = dialogBoxButtonPanel.findElements(By.className("gwt-PushButton"));
        actionButtonNames = getNavigationMenuItemNames(actionButtons, findDivButtonNamesByHtmlFaceText());
    }

    public SaveTopicDialog inputMessage(String message) {
        messageInput.clear();
        messageInput.sendKeys(message);
        return this;
    }

    public SaveTopicDialog inputUser(String user) {
        userInput.clear();
        userInput.sendKeys(user);
        return this;
    }

    public SaveTopicDialog selectChangePriority(boolean isMajorChange) {
        if (isMajorChange) {
            majorChangeRadioButton.click();
        } else {
            minorChangeRadioButton.click();
        }
        return this;
    }

    public CreateTopicPage clickOk() {
        CreateTopicPage createTopicPage = goToMenuPage("OK", CreateTopicPage.class, actionButtons, actionButtonNames);
        //TODO wait for and handle modal dialog "Your changes were successfully saved to Topic 21157" "The page at skynet.usersys.redhat.com:8080 says"
        //Create a way for id to be returned, for test verification?
        return createTopicPage;
    }
}
