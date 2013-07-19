package org.jboss.pressgang.ccms.page.topic;

import lombok.extern.slf4j.Slf4j;
import org.jboss.pressgang.ccms.page.AbstractPage;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.jboss.pressgang.ccms.util.Constants.THIRTY_SEC;
import static org.jboss.pressgang.ccms.util.Constants.findDivButtonNamesByHtmlFaceText;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@Slf4j
public class SaveTopicDialog<T extends CreateTopicPage> extends AbstractPage {

    private Class<T> currentPaneClass;
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

    public SaveTopicDialog(WebDriver driver, Class<T> currentPaneClass) {
        super(driver);
        this.currentPaneClass = currentPaneClass;
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

    @SuppressWarnings("unchecked")
    public T clickOk() {
        T createTopicPage = goToMenuPage("OK", currentPaneClass, actionButtons, actionButtonNames);
        Alert alert = new WebDriverWait(getDriver(), THIRTY_SEC).until(ExpectedConditions.alertIsPresent());
        if (alert == null) {
            log.warn("Alert expected but not found");
        }
        assert (alert != null);
        Matcher matcher = Pattern.compile("[0-9]+$").matcher(alert.getText());
        String topicId = "";
        if (!matcher.matches()) {
            log.warn("Could not find new Topic ID");
        } else {
            topicId = matcher.group();
        }
        alert.accept();

        return (T) createTopicPage.setLastCreatedTopicId(topicId);
    }
}
