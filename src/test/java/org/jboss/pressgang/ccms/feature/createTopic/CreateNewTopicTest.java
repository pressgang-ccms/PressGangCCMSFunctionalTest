package org.jboss.pressgang.ccms.feature.createTopic;

import org.concordion.api.extension.Extensions;
import org.concordion.ext.ScreenshotExtension;
import org.concordion.ext.TimestampFormatterExtension;
import org.concordion.integration.junit4.ConcordionRunner;
import org.jboss.pressgang.ccms.concordion.CustomResourceExtension;
import org.junit.Before;
import org.junit.runner.RunWith;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@RunWith(ConcordionRunner.class)
@Extensions({ScreenshotExtension.class, TimestampFormatterExtension.class, CustomResourceExtension.class})
public class CreateNewTopicTest {

    @Before
    public void beforeMethod() {
        // Do stuff
    }

//    public CreateTopicPage createNewTopic() {
//        return new CreateTopicWorkflow.createNewTopic();
//    }
}
