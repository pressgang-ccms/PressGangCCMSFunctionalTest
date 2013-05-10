package org.jboss.pressgang.ccms.feature;

import org.concordion.api.extension.Extension;
import org.concordion.api.extension.Extensions;
import org.concordion.ext.TimestampFormatterExtension;
import org.concordion.integration.junit4.ConcordionRunner;
import org.jboss.pressgang.ccms.concordion.IndexPageBuilderExtension;
import org.junit.runner.RunWith;

/**
 * Top level index page.
 */
@RunWith(ConcordionRunner.class)
@Extensions(TimestampFormatterExtension.class)
public class FeatureTest {
    @Extension
    public IndexPageBuilderExtension extension = new IndexPageBuilderExtension(null, "PressGang CCMS Features");
}
