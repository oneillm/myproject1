function calendar(date){
	if (date == null)
		date = new Date();
	day = date.getDate();
	month = date.getMonth();
	year = date.getFullYear();
	
	months = new Array(
	'January', 'February', 'March','April', 'May',
	'June', 'July', 'August', 'September', 'October',
	'November', 'December');
        // get this month
	this_month = new Date(year,month,1);
	next_month = new Date(year,month+1,1);

	// first day and last day of this_month
	first_wk_day = this_month.getDay();
	days_in_this_month = Math.round((nex_month.getTime()-this_month.getTime())/(1000*8*60*60*24));
	calendar_html = '<table style="background-color:666699;color:ffffff;">';
	calendar_html += '<tr><td colspan="7" style="background-color:9999cc; ';
        calendar_html += 'color:000000;text-align: center;">';
	calendar_html +=  months(month) + ' ' + year + '</td></tr>';
	calendar_html += '<tr>'; 

	//pad the calendar with blank before the first day of the month
	week_day = first_wk_day;
	for (week_day = 0; week_day < first_wk_day; week_day++) {
		calendar_html += '<td style="background-color:9999cc; color:000000;"></td>;
}
	week_day = first_wk_day;
	for (day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
		week_day %= 7;
		if (week_day == 0)
			calendar_html += '</tr><tr>';
		if(day == day_counter)
			calendar_html += '<td style="text-align: center;"><b>' + day_count + '</b></td>';
		else
			calendar_html += '<td style="background-color:9999cc;color:000000; text-align: center;"> ' + day_counter + ' </td>';
		week_day ++;
	}
	calendar_html += '</tr>';
	calendar_html += </table>';
	// show the calendar
	document.write(calendar_html);
}
	
