/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// module.exports = {
  // // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // // But you can create a sidebar manually
  // /*
  // tutorialSidebar: [
    // {
      // type: 'category',
      // label: 'Tutorial',
      // items: ['hello'],
    // },
  // ],
   // */

// };

module.exports = {
  // DocSidebar: [
    // {
      // type: 'autogenerated',
      // dirName: 'simotel'
    // },
  // ],

Autodialer: [    
     {
	   type: 'category',
	    label: 'تماس انبوه',
		items: [
				'autodialer/introad',
				'autodialer/contacts',
				'autodialer/groups',
				'autodialer/announcements',
				'autodialer/trunk_manager',
				'autodialer/campaigns',
				'autodialer/reports',
				'autodialer/dialer.ini',

		],
	  },
  ],
  
  
     // API: [
   
    // {
      // type: 'autogenerated',
      // dirName: 'api'
    // },
  // ],
  
  
 /////////////////////////////////// API SimoTel Sidebar//////////////////////////////////
   docs: [
	   
	'api/introapi',
   {
	'Simotel API': [
		{
			type: 'category',
			label: 'v4',
			items: [
				'api/v4/callcenter_api/SimoTelAPI/whatis',
				'api/v4/callcenter_api/SimoTelAPI/settings',
				'api/v4/callcenter_api/SimoTelAPI/ping',
				'api/v4/callcenter_api/SimoTelAPI/call-originate',
		  {
			'کاربر': ['api/v4/callcenter_api/SimoTelAPI/users/users_add',
					  'api/v4/callcenter_api/SimoTelAPI/users/users_search',
					  'api/v4/callcenter_api/SimoTelAPI/users/users_edit',
					  'api/v4/callcenter_api/SimoTelAPI/users/users_remove',
					],
			'ترانک': ['api/v4/callcenter_api/SimoTelAPI/trunks/trunks_add',
					  'api/v4/callcenter_api/SimoTelAPI/trunks/trunks_search',
					  'api/v4/callcenter_api/SimoTelAPI/trunks/trunks_edit',
					  'api/v4/callcenter_api/SimoTelAPI/trunks/trunks_remove',
					],
			'صف': [ 'api/v4/callcenter_api/SimoTelAPI/queues/queues_add',
					'api/v4/callcenter_api/SimoTelAPI/queues/queues_search',
					'api/v4/callcenter_api/SimoTelAPI/queues/queues_edit',
					'api/v4/callcenter_api/SimoTelAPI/queues/queues_remove',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_addagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_pauseagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_resumagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_removeagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_batchaddagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_batchpauseagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_batchresumagent',
					'api/v4/callcenter_api/SimoTelAPI/queues/queue_batchremoveagent',
				],
			'موزیک انتظار': ['api/v4/callcenter_api/SimoTelAPI/musiconhold/musiconhold_search'
				],
			'آوا': ['api/v4/callcenter_api/SimoTelAPI/announcement/announcements_upload',
					'api/v4/callcenter_api/SimoTelAPI/announcement/announcements_add',
					'api/v4/callcenter_api/SimoTelAPI/announcement/announcements_search',
					'api/v4/callcenter_api/SimoTelAPI/announcement/announcements_edit',
					'api/v4/callcenter_api/SimoTelAPI/announcement/announcements_remove',
				],
			'صندوق‌صوتی': ['api/v4/callcenter_api/SimoTelAPI/voicemail/voicemail_add',
						  'api/v4/callcenter_api/SimoTelAPI/voicemail/voicemail_search',
						  'api/v4/callcenter_api/SimoTelAPI/voicemail/voicemail_edit',
						  'api/v4/callcenter_api/SimoTelAPI/voicemail/voicemail_remove',
						  'api/v4/callcenter_api/SimoTelAPI/voicemail/inbox_search',
						  'api/v4/callcenter_api/SimoTelAPI/voicemail/inbox_download',
						],
			'لیست‌سیاه': ['api/v4/callcenter_api/SimoTelAPI/blacklist/blacklist_add',
						 'api/v4/callcenter_api/SimoTelAPI/blacklist/blacklist_search',
						 'api/v4/callcenter_api/SimoTelAPI/blacklist/blacklist_edit',
						 'api/v4/callcenter_api/SimoTelAPI/blacklist/blacklist_remove',
						],
			'لیست‌سفید': ['api/v4/callcenter_api/SimoTelAPI/whitelist/whitelist_add',
						 'api/v4/callcenter_api/SimoTelAPI/whitelist/whitelist_search',
						 'api/v4/callcenter_api/SimoTelAPI/whitelist/whitelist_edit',
						 'api/v4/callcenter_api/SimoTelAPI/whitelist/whitelist_remove',
						],
			'فکس': ['api/v4/callcenter_api/SimoTelAPI/fax/fax_upload',
					'api/v4/callcenter_api/SimoTelAPI/fax/fax_add',
					'api/v4/callcenter_api/SimoTelAPI/fax/fax_search',
					'api/v4/callcenter_api/SimoTelAPI/fax/fax_download',
				],
			'گزارشات': ['api/v4/callcenter_api/SimoTelAPI/report/quick_search',
						'api/v4/callcenter_api/SimoTelAPI/report/quick_info',
						'api/v4/callcenter_api/SimoTelAPI/report/audio_download',
						'api/v4/callcenter_api/SimoTelAPI/report/report_cdr_search',
						'api/v4/callcenter_api/SimoTelAPI/report/report_cdr_ordered_id',
						'api/v4/callcenter_api/SimoTelAPI/report/queue_search',
						'api/v4/callcenter_api/SimoTelAPI/report/queue_search_ordered_id',
						'api/v4/callcenter_api/SimoTelAPI/report/queue_details_search',
						'api/v4/callcenter_api/SimoTelAPI/report/queue_details_ordered_id',
						'api/v4/callcenter_api/SimoTelAPI/report/agent_search',
						'api/v4/callcenter_api/SimoTelAPI/report/report_poll',
					],
		   },
		]
		},
		// {
		// 	type:'category',
		// 	label:'v3',
		// 	items: [
		// 		'api/v3/callcenter_api/SimoTelAPI/settings',
		// 		'api/v3/callcenter_api/SimoTelAPI/call-originate',
		//   {
		// 	'کاربر': ['api/v3/callcenter_api/SimoTelAPI/users/users_add',
		// 			  'api/v3/callcenter_api/SimoTelAPI/users/users_search',
		// 			  'api/v3/callcenter_api/SimoTelAPI/users/users_edit',
		// 			  'api/v3/callcenter_api/SimoTelAPI/users/users_remove',
		// 			],
		// 	'ترانک': ['api/v3/callcenter_api/SimoTelAPI/trunks/trunks_add',
		// 			  'api/v3/callcenter_api/SimoTelAPI/trunks/trunks_search',
		// 			  'api/v3/callcenter_api/SimoTelAPI/trunks/trunks_edit',
		// 			  'api/v3/callcenter_api/SimoTelAPI/trunks/trunks_remove',
		// 			],
		// 	'صف': [ 'api/v3/callcenter_api/SimoTelAPI/queues/queues_add',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queues_search',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queues_edit',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queues_remove',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_addagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_pauseagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_resumagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_removeagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_batchaddagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_batchpauseagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_batchresumagent',
		// 			'api/v3/callcenter_api/SimoTelAPI/queues/queue_batchremoveagent',
		// 		],
		// 	'موزیک انتظار': ['api/v3/callcenter_api/SimoTelAPI/musiconhold/musiconhold_search'
		// 		],
		// 	'آوا': ['api/v3/callcenter_api/SimoTelAPI/announcement/announcements_upload',
		// 			'api/v3/callcenter_api/SimoTelAPI/announcement/announcements_add',
		// 			'api/v3/callcenter_api/SimoTelAPI/announcement/announcements_search',
		// 			'api/v3/callcenter_api/SimoTelAPI/announcement/announcements_edit',
		// 			'api/v3/callcenter_api/SimoTelAPI/announcement/announcements_remove',
		// 		],
		// 	'صندوق‌صوتی': ['api/v3/callcenter_api/SimoTelAPI/voicemail/voicemail_add',
		// 				  'api/v3/callcenter_api/SimoTelAPI/voicemail/voicemail_search',
		// 				  'api/v3/callcenter_api/SimoTelAPI/voicemail/voicemail_edit',
		// 				  'api/v3/callcenter_api/SimoTelAPI/voicemail/voicemail_remove',
		// 				  'api/v3/callcenter_api/SimoTelAPI/voicemail/inbox_search',
		// 				  'api/v3/callcenter_api/SimoTelAPI/voicemail/inbox_download',
		// 				],
		// 	'لیست‌سیاه': ['api/v3/callcenter_api/SimoTelAPI/blacklist/blacklist_add',
		// 				 'api/v3/callcenter_api/SimoTelAPI/blacklist/blacklist_search',
		// 				 'api/v3/callcenter_api/SimoTelAPI/blacklist/blacklist_edit',
		// 				 'api/v3/callcenter_api/SimoTelAPI/blacklist/blacklist_remove',
		// 				],
		// 	'لیست‌سفید': ['api/v3/callcenter_api/SimoTelAPI/whitelist/whitelist_add',
		// 				 'api/v3/callcenter_api/SimoTelAPI/whitelist/whitelist_search',
		// 				 'api/v3/callcenter_api/SimoTelAPI/whitelist/whitelist_edit',
		// 				 'api/v3/callcenter_api/SimoTelAPI/whitelist/whitelist_remove',
		// 				],
		// 	'فکس': ['api/v3/callcenter_api/SimoTelAPI/fax/fax_upload',
		// 			'api/v3/callcenter_api/SimoTelAPI/fax/fax_add',
		// 			'api/v3/callcenter_api/SimoTelAPI/fax/fax_search',
		// 			'api/v3/callcenter_api/SimoTelAPI/fax/fax_download',
		// 		],
		// 	'گزارشات': ['api/v3/callcenter_api/SimoTelAPI/report/quick_search',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/quick_info',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/audio_download',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/report_cdr_search',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/report_cdr_ordered_id',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/queue_search',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/queue_search_ordered_id',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/queue_details_search',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/queue_details_ordered_id',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/agent_search',
		// 				'api/v3/callcenter_api/SimoTelAPI/report/report_poll',
		// 			],
		//    },
		// ]
		// }	
	]
},
{
	type: 'category',
	 label: 'Simotel Client',
	 items: [
			'api/callcenter_api/SimoTelClient/whatis',
			 {
			 'Events Api': ['api/callcenter_api/SimoTelClient/EventsApi/whatis','api/callcenter_api/SimoTelClient/EventsApi/setting','api/callcenter_api/SimoTelClient/EventsApi/transfer','api/callcenter_api/SimoTelClient/EventsApi/incoming_call','api/callcenter_api/SimoTelClient/EventsApi/outgoing_call','api/callcenter_api/SimoTelClient/EventsApi/exten_added','api/callcenter_api/SimoTelClient/EventsApi/exten_remove','api/callcenter_api/SimoTelClient/EventsApi/incoming_fax','api/callcenter_api/SimoTelClient/EventsApi/outgoing_fax','api/callcenter_api/SimoTelClient/EventsApi/cdr_queue','api/callcenter_api/SimoTelClient/EventsApi/voicemail','api/callcenter_api/SimoTelClient/EventsApi/voicemail_email','api/callcenter_api/SimoTelClient/EventsApi/survey','api/callcenter_api/SimoTelClient/EventsApi/cdr','api/callcenter_api/SimoTelClient/EventsApi/TrunkNewState','api/callcenter_api/SimoTelClient/EventsApi/TrunkAdded','api/callcenter_api/SimoTelClient/EventsApi/TrunkRemoved','api/callcenter_api/SimoTelClient/EventsApi/AutoDialerReport','api/callcenter_api/SimoTelClient/EventsApi/new_state',],
			 'Components Api':['api/callcenter_api/SimoTelClient/ComponentsApi/whatis',,'api/callcenter_api/SimoTelClient/ComponentsApi/setting','api/callcenter_api/SimoTelClient/ComponentsApi/exten_api','api/callcenter_api/SimoTelClient/ComponentsApi/trunk_api','api/callcenter_api/SimoTelClient/ComponentsApi/ivr_api','api/callcenter_api/SimoTelClient/ComponentsApi/smart_api'],
			 }
	 ],
},
//    {
// 		type: 'category',
// 		 label: 'کامپوننت‌های API',
// 		 items: ['api/callcenter_api/APIComponents/setting','api/callcenter_api/APIComponents/exten_api','api/callcenter_api/APIComponents/trunk_api','api/callcenter_api/APIComponents/ivr_api','api/callcenter_api/APIComponents/smart_api',],
//    },
   {
		type: 'category',
		 label: 'مثال‌های کاربردی',
		 items: ['api/callcenter_api/Scenarios/smart_api','api/callcenter_api/Scenarios/exten_api','api/callcenter_api/Scenarios/call_originate'],
   },
   {
	type: 'category',
	 label: 'two',
	 items: ['api/two_verify/whatis'],
},
	
	
	
  
/////////////////////////////////// API SimoTel Sidebar//////////////////////////////////


{
	'ماژول تماس‌انبوه': [
		'api/v4/autodialer_api/introautodialer',
{
				'مخاطبین': ['api/v4/autodialer_api/contact/contact_add','api/v4/autodialer_api/contact/contact_search','api/v4/autodialer_api/contact/contact_edit','api/v4/autodialer_api/contact/contact_delete',],
				'گروه‌ها': ['api/v4/autodialer_api/group/group_upload','api/v4/autodialer_api/group/group_add','api/v4/autodialer_api/group/group_search','api/v4/autodialer_api/group/group_edit','api/v4/autodialer_api/group/group_delete',],
				'کمپین': ['api/v4/autodialer_api/campaign/campaign_add','api/v4/autodialer_api/campaign/campaign_search','api/v4/autodialer_api/campaign/campaign_edit','api/v4/autodialer_api/campaign/campaign_delete',],
				'آواها': ['api/v4/autodialer_api/announcement/announcement_upload','api/v4/autodialer_api/announcement/announcement_add','api/v4/autodialer_api/announcement/announcement_search','api/v4/autodialer_api/announcement/announcement_edit','api/v4/autodialer_api/announcement/announcement_delete',],
				'ترانک': ['api/v4/autodialer_api/trunk_manager/trunk_manager_search','api/v4/autodialer_api/trunk_manager/trunk_manager_edit',],
				'گزارشات': ['api/v4/autodialer_api/report/report_search','api/v4/autodialer_api/report/report_search_ordered','api/v4/autodialer_api/report/report_info',],
},
		'api/v4/autodialer_api/example',
		'api/v4/autodialer_api/call_originate',
		
],
}

  
/////////////////////////////////// API AutoDialer Sidebar//////////////////////////////////
  
],
  
/////////////////////////////////// API  AutoDialer Sidebar//////////////////////////////////


  
  
  
  
  
///////////////////////////////////Simotel Docs Sidebar//////////////////////////////////
    Docs: [
		'simotel/introsimotel',
	  
	  
      {
		   type: 'category',
		    label: 'آشنایی با سامانه',
			collapsed: false,
			items: ['simotel/system-intro/pbxsettingintro','simotel/system-intro/dialplanintro'],
	  },
	  
	  
      {
		  'مستندات مرکز‌تماس': [
			{
				'داشبورد مدیریتی': ['simotel/callcenter-docs/dashboard/intro','simotel/callcenter-docs/dashboard/realtime_components','simotel/callcenter-docs/dashboard/queue_components','simotel/callcenter-docs/dashboard/general_components',],
				
				
				
				'مرکز مانیتورینگ': ['simotel/callcenter-docs/monitor/operator','simotel/callcenter-docs/monitor/exten'],
				
				
				
				'مرکزتماس': ['simotel/callcenter-docs/pbx/users','simotel/callcenter-docs/pbx/trunks','simotel/callcenter-docs/pbx/queues','simotel/callcenter-docs/pbx/groups','simotel/callcenter-docs/pbx/music_on_hold','simotel/callcenter-docs/pbx/announcements','simotel/callcenter-docs/pbx/featur_codes','simotel/callcenter-docs/pbx/speed_dial','simotel/callcenter-docs/pbx/blacklist','simotel/callcenter-docs/pbx/white_list','simotel/callcenter-docs/pbx/faxes'],
				
				
				
				'صندوق‌صوتی': ['simotel/callcenter-docs/voicemail/voice_mailboxes','simotel/callcenter-docs/voicemail/inbox',],
				
				
				
				'تماس‌بهمنی': ['simotel/callcenter-docs/spit-detection/intro','simotel/callcenter-docs/spit-detection/spit_detect','simotel/callcenter-docs/spit-detection/auto_spit_detect',],
				
				
				
				'ویرایشگر': ['simotel/callcenter-docs/dialplan/intro',
				{'کامپوننت‌ها': ['simotel/callcenter-docs/dialplan/components/outgoing_route','simotel/callcenter-docs/dialplan/components/incoming_route','simotel/callcenter-docs/dialplan/components/autodialer_route','simotel/callcenter-docs/dialplan/components/ivr','simotel/callcenter-docs/dialplan/components/ivr_api','simotel/callcenter-docs/dialplan/components/extension','simotel/callcenter-docs/dialplan/components/extension_api','simotel/callcenter-docs/dialplan/components/queue','simotel/callcenter-docs/dialplan/components/answer','simotel/callcenter-docs/dialplan/components/agi','simotel/callcenter-docs/dialplan/components/disa','simotel/callcenter-docs/dialplan/components/trunk','simotel/callcenter-docs/dialplan/components/trunk_api','simotel/callcenter-docs/dialplan/components/announcements','simotel/callcenter-docs/dialplan/components/callback','simotel/callcenter-docs/dialplan/components/ring_group','simotel/callcenter-docs/dialplan/components/followe_me','simotel/callcenter-docs/dialplan/components/voicemail','simotel/callcenter-docs/dialplan/components/conference','simotel/callcenter-docs/dialplan/components/call_completion','simotel/callcenter-docs/dialplan/components/pickup','simotel/callcenter-docs/dialplan/components/poll','simotel/callcenter-docs/dialplan/components/mix_monitor','simotel/callcenter-docs/dialplan/components/authentication','simotel/callcenter-docs/dialplan/components/time_condition','simotel/callcenter-docs/dialplan/components/spit_detection','simotel/callcenter-docs/dialplan/components/blacklist','simotel/callcenter-docs/dialplan/components/whitelist','simotel/callcenter-docs/dialplan/components/jump_in','simotel/callcenter-docs/dialplan/components/jump_out','simotel/callcenter-docs/dialplan/components/corrector','simotel/callcenter-docs/dialplan/components/custom_plan','simotel/callcenter-docs/dialplan/components/smart_api','simotel/callcenter-docs/dialplan/components/chanspy','simotel/callcenter-docs/dialplan/components/page',],},
				'simotel/callcenter-docs/dialplan/variables',
				],
				
				
				
				'گزارشات': ['simotel/callcenter-docs/reports/intro','simotel/callcenter-docs/reports/filter','simotel/callcenter-docs/reports/quick_report','simotel/callcenter-docs/reports/advanced_report','simotel/callcenter-docs/reports/custom_report',],
				
				
				
				'‌نگهداری': ['simotel/callcenter-docs/maintenance/accounts','simotel/callcenter-docs/maintenance/groups','simotel/callcenter-docs/maintenance/account_type','simotel/callcenter-docs/maintenance/activity_log','simotel/callcenter-docs/maintenance/server_status',
				{'Settings': ['simotel/callcenter-docs/maintenance/settings/general_settings','simotel/callcenter-docs/maintenance/settings/api_settings','simotel/callcenter-docs/maintenance/settings/update','simotel/callcenter-docs/maintenance/settings/push_notification',
				'simotel/callcenter-docs/maintenance/settings/backup_drive','simotel/callcenter-docs/maintenance/settings/mail_server','simotel/callcenter-docs/maintenance/settings/more_settings',],},
				'simotel/callcenter-docs/maintenance/network','simotel/callcenter-docs/maintenance/api_accounts','simotel/callcenter-docs/maintenance/api_logs','simotel/callcenter-docs/maintenance/system_logs',],
				
				
				
				
				'پنل‌مدیریتی': ['simotel/callcenter-docs/control-panel/backup','simotel/callcenter-docs/control-panel/ha','simotel/callcenter-docs/control-panel/ha_logs','simotel/callcenter-docs/control-panel/pbx_cli',],
			}
				  ]
	  },
	  	  
      {
		  'مباحث پیشرفته': [

			{
				
				//'سرویس HA': ['simotel/advance-settings/ha-service/intro'],				
			},
				'simotel/advance-settings/simotelupdate','simotel/advance-settings/simotelhelper_tool','simotel/advance-settings/simotel.ini','simotel/advance-settings/create_ami_user','simotel/advance-settings/matchpattern','simotel/advance-settings/call_record_storage',
				  ]
	  },
    ],
///////////////////////////////////Simotel Docs Sidebar//////////////////////////////////

};












