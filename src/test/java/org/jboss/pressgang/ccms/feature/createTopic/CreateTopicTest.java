package org.jboss.pressgang.ccms.feature.createTopic;

import org.concordion.api.extension.Extension;
import org.concordion.integration.junit4.ConcordionRunner;
import org.jboss.pressgang.ccms.concordion.IndexPageBuilderExtension;
import org.junit.runner.RunWith;

/**
 * This is the index page for createTopic package.
 */
@RunWith(ConcordionRunner.class)
public class CreateTopicTest {
    @Extension
    public IndexPageBuilderExtension extension = new IndexPageBuilderExtension(CreateTopicTestSuite.class, "Create topic workflows");
}
