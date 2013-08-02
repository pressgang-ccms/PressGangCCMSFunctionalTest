package org.jboss.pressgang.ccms.workflow;

import com.google.common.base.Optional;
import org.jboss.pressgang.ccms.page.topic.CreateTopicPage;
import org.jboss.pressgang.ccms.page.topic.SaveTopicDialog;

/**
 * @author kamiller@redhat.com (Katie Miller)
 */
public class CreateTopicWorkflow extends AbstractWebWorkflow {

    public CreateTopicPage createNewTopic(String xml, Optional<String> message, Optional<String> user,
                                          boolean majorChange, String title) {
        SaveTopicDialog saveTopicDialog = goToHome().goToCreateTopic().goToXmlEditingPane().inputXml(xml)
                .goToPropertiesPane().inputTopicTitle(title).clickSave();
        if (message.isPresent()) {
            saveTopicDialog = saveTopicDialog.inputMessage(message.get());
        }
        if (user.isPresent()) {
            saveTopicDialog = saveTopicDialog.inputUser(user.get());
        }
        return saveTopicDialog.selectChangePriority(majorChange).clickOk();
    }
}
