package org.jboss.pressgang.ccms.page.topic;

import lombok.extern.slf4j.Slf4j;
import org.jboss.pressgang.ccms.page.AbstractPage;
import org.openqa.selenium.WebDriver;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@Slf4j
public class CreateTopicPage extends AbstractPage {

    public CreateTopicPage(WebDriver driver) {
        super(driver);
    }
}
