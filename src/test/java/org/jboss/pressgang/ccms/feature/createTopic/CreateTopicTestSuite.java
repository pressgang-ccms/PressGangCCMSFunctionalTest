package org.jboss.pressgang.ccms.feature.createTopic;

import lombok.extern.slf4j.Slf4j;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
@Slf4j
@RunWith(Suite.class)
@Suite.SuiteClasses({
        CreateTopicTest.class,
        CreateNewTopicTest.class
})
public class CreateTopicTestSuite {
}
