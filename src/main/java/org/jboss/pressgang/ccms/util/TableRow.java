package org.jboss.pressgang.ccms.util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * @author Patrick Huang
 */
public class TableRow {
    private final WebElement row;

    public TableRow(WebElement row) {
        this.row = row;
    }

    public List<WebElement> getCells() {
        return row.findElements(By.xpath(".//td"));
    }

    public List<String> getCellContents() {
        return WebElementUtil.elementsToText(getCells());
    }

    @Override
    public String toString() {
        return row.getText();
    }
}
