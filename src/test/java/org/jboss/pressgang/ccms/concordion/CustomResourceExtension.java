package org.jboss.pressgang.ccms.concordion;

import org.concordion.api.Resource;
import org.concordion.api.extension.ConcordionExtender;
import org.concordion.api.extension.ConcordionExtension;

/**
 * Based on https://github.com/zanata/zanata/blob/master/functional-test/src/test/java/org/zanata/concordion/CustomResourceExtension.java
 * by Patrick Huang.
 */

public class CustomResourceExtension implements ConcordionExtension {

    public static final String JQUERY_PATH = "/org/jboss/pressgang/ccms/feature/jquery-1.8.3.min.js";
    public static final String CSS_PATH = "/org/jboss/pressgang/ccms/feature/spec.css";
    public static final String JS_PATH = "/org/jboss/pressgang/ccms/feature/spec.js";

    @Override
    public void addTo(ConcordionExtender concordionExtender) {
        concordionExtender.withLinkedCSS(CSS_PATH, new Resource(CSS_PATH));
        concordionExtender.withLinkedJavaScript(JQUERY_PATH, new Resource(JQUERY_PATH));
        concordionExtender.withLinkedJavaScript(JS_PATH, new Resource(JS_PATH));
    }
}
