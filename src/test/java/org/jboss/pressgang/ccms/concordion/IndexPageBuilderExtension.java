package org.jboss.pressgang.ccms.concordion;

import org.concordion.api.extension.ConcordionExtender;
import org.concordion.api.extension.ConcordionExtension;

/**
 * Based on https://github.com/zanata/zanata/blob/master/functional-test/src/test/java/org/zanata/concordion/IndexPageBuilderExtension.java
 * by Patrick Huang.
 */
public class IndexPageBuilderExtension implements ConcordionExtension {
    private GeneratedIndexSource generatedIndexSource;

    public IndexPageBuilderExtension() {
        this(null, null);
    }

    /**
     * @param testSuiteClass     If you use the test suite to control the test run, then specify it here. If null, it will list spec files under the package in natural order.
     * @param descriptionHeading Description text that will appear in the generated index page. If null, it will use generated title from package name.
     */
    public IndexPageBuilderExtension(Class<?> testSuiteClass, String descriptionHeading) {
        generatedIndexSource = new GeneratedIndexSource(testSuiteClass, descriptionHeading);
    }

    @Override
    public void addTo(ConcordionExtender concordionExtender) {
        concordionExtender.withSource(generatedIndexSource);
    }
}
