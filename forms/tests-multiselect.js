function multiSelectTests()
{
	module("Multi select box");
	
	test("isDropDownList", function()
	{
		equals($("#_multiselect").isDropDownList(),false);
	});
	
	test("isSelectBox", function()
	{
		equals($("#_multiselect").isSelectBox(),false);
	});
	
	test("isMultiSelectBox", function()
	{
		equals($("#_multiselect").isMultiSelectBox(),true);
	});
	
	test("isSelected", function()
	{
		equals($("#_multiselect").isSelected("Stewie"),true);
		equals($("#_multiselect").isSelected("Brian"),false);
		equals($("#_multiselect").isSelected("Ford Prefect","Stewie"),true);
		equals($("#_multiselect").isSelected("Ford Prefect","Brian"),false);
	});
	
	test("selectedValue", function()
	{
		var val = $("#_multiselect").selectedValue();
		equals(val,"Ford Prefect");
	});
	
	test("selectedValues", function()
	{
		var vals = $("#_multiselect").selectedValues();
		equals(vals.length,2);
		equals(vals[1],"Stewie");
	});
	
	test("selectedItem(1)", function()
	{
		equals($("#_multiselect").selectedItem(1).val(),"Stewie");
	});
	
	test("firstSelectedItem", function()
	{
		equals($("#_multiselect").firstSelectedItem().val(),"Ford Prefect");
	});
	
	test("lastSelectedItem", function()
	{
		equals($("#_multiselect").lastSelectedItem().val(),"Stewie");
	});
	
	test("itemExists", function()
	{
		equals($("#_multiselect").itemExists("Maggie"),true);
	});
}