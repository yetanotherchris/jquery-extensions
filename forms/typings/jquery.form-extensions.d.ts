/*
 * jQuery Form Extensions 1.1
 * http://code.google.com/p/jquery-extensions/
 *
 * Copyright (c) 2015 C.Small
 *
 * Licensed under the MIT license.
 * Date: 21:31 20/05/2009
 */

interface JQuery
{
    /* Checks if a jQuery object exists in the DOM, by checking the length of its child elements. */
    elementExists(): boolean;

    /* Retrieves the form field type based on its type attribute. */
    formElementType(): string;

    /* Determines if the element is a textbox. */
    isTextBox(): boolean;

    /* Determines if the element is a textarea. */
    isTextArea(): boolean;

    /* Determines if the element is a password textbox. */
    isPassword(): boolean;

    /* Determines if the element is a hidden input box. */
    isHiddenInput(): boolean;

    /* Determines if the element is a checkbox. */
    isCheckBox(): boolean;

    /* Determines if the element is a radiobox. */
    isRadioBox(): boolean;

    /* Determines if the element is a button (but not a submit or reset button). */
    isButton(): boolean;

    /* Determines if the element is a submit button. */
    isSubmitButton(): boolean;

    /* Determines if the element is a reset button. */
    isResetButton(): boolean;

    /* Determines if the element is a single selection 2 or more rows select box. */
    isSelectBox(): boolean;

    /* Determines if the element is a multi selection select box. */
    isMultiSelectBox(): boolean;

    /* Determines if the element is a drop down list, that is a select box with 1 row and items appear when clicked, rather
       than just a scrollbar. */
    isDropDownList(): boolean;

    /* Determines if the element is checked. The pre-condition for this is the element is a checkbox. */
    isChecked(): boolean;

    /* Determines if the list of provided values are selected. The pre-condition for this is the element is a select box. 
        This performs an 'AND' search - all the values must be selected for the function to return true.
        Example: $("#element").isSelected("1","2");
        @param arguments A list of values to see if they are selected.
    */
    isSelected(...values: any[]): boolean;

    /* Retrieves the Nth selected item from a radiobox or select box list. If N is greater than the number of selected items
       then the last item is returned.
       Example: $("#element").selectedItem(2); // the 3rd selected item.
       @param index The selected index to retrieve, this is zero based.
       @returns A jQuery object.
    */
    selectedItem(index: number): JQuery;

    /* Gets the first selected item from a radiobox list or select box list.
       @returns A jQuery object.
    */
    firstSelectedItem(): JQuery;

    /* Gets the last selected item from a radiobox list or select box list.
       @returns A jQuery object.
    */
    lastSelectedItem(): JQuery;

    /* Gets the value of the first selected item in a radiobox list or select box list.
       @returns A string value for the selected item.
    */
    selectedValue(): string;

    /* Gets the values of the all selected items in multiple selection select box list.
       @returns An array of string values for all selected items.
    */
    selectedValues(): string[];

    /* Determines if the provided item exists as a value in a radiobox or select box list
       @param item The value to check.
       @returns True if the item exists; otherwise, false.
    */
    itemExists(item: string): boolean;

    /* Selects an item in a drop down list by its index.
    @param index The selected drop down list item index to select, this is zero based. 
    @returns A jQuery object.
    */
    selectByIndex(index: number): JQuery;

    /* Selects an item in a drop down list by its value.
    @param value The selected drop down list item value to select. 
    @returns A jQuery object.
    */
    selectByValue(value: string): JQuery;
}