package org.jboss.pressgang.ccms.feature.createTopic;

import com.google.common.base.Optional;
import lombok.extern.slf4j.Slf4j;
import org.concordion.api.extension.Extensions;
import org.concordion.ext.ScreenshotExtension;
import org.concordion.ext.TimestampFormatterExtension;
import org.concordion.integration.junit4.ConcordionRunner;
import org.jboss.pressgang.ccms.concordion.CustomResourceExtension;
import org.jboss.pressgang.ccms.util.TestConstants;
import org.jboss.pressgang.ccms.workflow.CreateTopicWorkflow;
import org.junit.runner.RunWith;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@Slf4j
@RunWith(ConcordionRunner.class)
@Extensions({ScreenshotExtension.class, TimestampFormatterExtension.class, CustomResourceExtension.class})
public class CreateNewTopicTest {

    public String createNewTopic(final String username, final String title) {
        return new CreateTopicWorkflow().createNewTopic(TestConstants.VALID_TOPIC_XML, Optional.<String>absent(),
                Optional.of(username), true, title);
    }
}
