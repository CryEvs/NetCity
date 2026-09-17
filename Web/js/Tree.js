function GetSchoolArray(treeId) {
	var str = "";
	
	var selectedItems = $('#' + treeId).dynatree("getTree").serializeArray();
	
	if (selectedItems.length == 0) {
		$("input[name=" + treeId + "]").attr("value", str);
		return false;
	} else {
		for (var ind in selectedItems) {
			var item = selectedItems[ind];
			if (/\D/.test(item.value))
				continue;
			str += item.value + ',';
		}
		str = str.substring(0, str.length - 1);
		$("input[name=" + treeId + "]").attr("value", str);
		return true;
	}
}