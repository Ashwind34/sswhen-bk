'use strict';

module.exports = function(Results) {

    Results.remoteMethod("emailResults", {
        http: {
            path: "/emailResults",
            verb: "POST"
        },
        accepts: [{
            arg: "email",
            required: true,
            type: "string",
            description: "Email to send results to"

        }, {
            arg: "date",
            required: true,
            type: "string",
            description: "Date of Calculations"
        }, {
            arg: "MonthlyPayout",
            required: false,
            type: "array",
            description: "Array of payout values to generate table"
        }],


        notes: "Some Note",
        description: "Email Results from Results Page",
        returns: {
            type: "object",
            root: true
        }

    })

    Results.emailResults = function(email, date, monthlyPayout) {

        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });
        console.log(monthlyPayout);
        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            subject: 'Results from ' + date,
            text: 'Testing some Mailgun awesomness!',
            html: `<html>
                        <body style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        	<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        		<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        			<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                        			 valign="top">
                        				<div style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        					<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;"
                        					 bgcolor="#fff">
                        						<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        							<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;"
                        							 align="center" valign="top">
                        								<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h1 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                                                       SSWhen Results for ${date}
                                                                     </h1>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h2 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                               Monthly Payout by Retirement Age
                                               </h2>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;"
                        										 align="center" valign="top">
                        											<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: center; width: 50%; margin: auto;">
                        												<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        													<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;"
                        													 valign="top">
                        														<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 50%; margin: auto; border-collapse: collapse; border-width: 1px; border-color: black; border-style: solid;">
                        															<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	62
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	63
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	64
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																    ${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	65
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	66
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	67
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	68
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	69
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																${monthlyPayout}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	70
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																${monthlyPayout}
                        																</td>
                        															</tr>
                        														</table>
                        													</td>
                        												</tr>
                        											</table>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        											<a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">
                        												Register
                        											</a>
                        										</td>
                        									</tr>
                        								</table>
                        							</td>
                        						</tr>
                        					</table>
                        				</div>
                        			</td>
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        		</tr>
                        	</table>
                        </body>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }

    Results.remoteMethod("emailResultsDashboard", {
        http: {
            path: "/emailResultsDashBoard",
            verb: "POST"
        },
        accepts: [{
                arg: "email",
                required: true,
                type: "string",
                description: "Email to send results to"

        }, {
                arg: "date",
                required: true,
                type: "string",
                description: "Date of Calculations"
        }, {
                arg: "MonthlyPayout",
                required: false,
                type: "string",
                description: "Array of monthly payout values to generate table"
        },
            {
                arg: "CumlativePayout",
                required: false,
                type: "string",
                description: "Array of cumulative payout values to generate table"
        }],


        notes: "Some Note",
        description: "Email Results from Dashboard Page",
        returns: {
            type: "object",
            root: true
        }

    })
    Results.emailResultsDashboard = function(email, date, tabledata) {

        var DOMAIN = 'sandbox51e960fff29c4d61ab5f46a99dfd7938.mailgun.org';
        var api_key = 'key-3134185636bcbeee7f0c041e3d2a6407';
        var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

        var tableData = [1245, 3452, 7688, 8832, 1672, 1837, 4151, 1551, 5151];
        var tableDataCumlative = [1245, 3452, 7688, 8832, 1672, 1837, 4151, 1551, 5151];
        var data = {
            from: 'James Orduno <jorduno19@gmail.com>',
            to: email,
            subject: 'Results from ' + date,
            text: 'Testing some Mailgun awesomness!',
            html: `<html>
                        <body style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        	<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
                        		<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        			<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                        			 valign="top">
                        				<div style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        					<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;"
                        					 bgcolor="#fff">
                        						<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        							<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 20px;"
                        							 align="center" valign="top">
                        								<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h1 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 32px; color: #000; line-height: 1.2em; font-weight: 500; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                                                       SSWhen Results for ${date}
                                                                     </h1>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                        										 valign="top">
                        											<h2 style="font-family: 'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; box-sizing: border-box; font-size: 24px; color: #000; line-height: 1.2em; font-weight: 400; text-align: center; margin: 40px 0 0;"
                        											 align="center">
                                               Payout by Retirement Age
                                               </h2>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;"
                        										 align="center" valign="top">
                        											<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; text-align: center; width: 50%; margin: auto;">
                        												<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        													<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;"
                        													 valign="top">
                        														<table style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: auto; border-collapse: collapse; border-width: 1px; border-color: black; border-style: solid;">
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	Age
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	Montly
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	Cumulative
                        																</td>
                        															</tr>
                        															<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	62
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[0]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[0]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	63
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[1]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[1]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	64
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[2]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[2]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	65
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[3]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[3]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	66
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																    ${tableData[4]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[4]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	67
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[5]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[5]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	68
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[6]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[6]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	69
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[7]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[7]}
                        																</td>
                        															</tr>
                                                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        																<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top;  margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	70
                        																</td>
                        																<td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableData[8]}
                        																</td>
                                                        <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0; border: 1px solid black;" valign="top">
                        																	${tableDataCumlative[8]}
                        																</td>
                        															</tr>
                        														</table>
                        													</td>
                        												</tr>
                        											</table>
                        										</td>
                        									</tr>
                        									<tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        										<td class="content-block aligncenter" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        											<a href="#" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">
                        												DashBoard
                        											</a>
                        										</td>
                        									</tr>
                        								</table>
                        							</td>
                        						</tr>
                        					</table>
                        				</div>
                        			</td>
                        			<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                        			 valign="top"></td>
                        		</tr>
                        	</table>
                        </body>
                    </html>`,
        };

        mailgun.messages().send(data, function(error, body) {
            console.log(body);
        });

    }


};
