// index-nav
const state = {
  // 底部导航栏
  indexNav: {
    list: [{
      index: 0,
      path: {
        path: '/'
      },
      hint: { type: 'count', count: 0 }, // count,dot
      iconClass: 'icon-home',
      text: '首页'
    },
    {
      index: 1,
      path: {
        path: '/investList'
      },

      hint: { type: 'count', count: 0 },
      iconClass: 'icon-invest',
      text: '出借'
    },
    {
      index: 2,
      path: {
        path: '/find'
      },
      hint: { type: 'dot', count: 99 },
      iconClass: 'icon-find',
      text: '发现'
    },
    {
      index: 3,
      path: {
        path: '/me'
      },
      hint: { type: null, count: '' },
      iconClass: 'icon-me',
      text: '我'
    }
    ]
  },
  // 首页数据
  home: {
    bannerlist: [
      {
        img: 'https://apixsxzz.xgqq.com/images?uuid=b74eaa79-a81b-4eac-b6f7-8b4d77fd320a',
        url: 'http://m.xgqq.com/#find/view~id=150'
      },
      {
        img: 'https://apixsxzz.xgqq.com/images?uuid=47560ebe-1e5c-4551-a722-6d0e594473fb',
        url: 'http://m.xgqq.com/#find/floorad'
      },
      {
        img: 'https://apixsxzz.xgqq.com/images?uuid=2743d89a-ebfd-44b4-9547-01b69ec4d9e1',
        url: 'https://m.xgqq.com/#activity/ruicai'
      },
      {
        img: 'https://apixsxzz.xgqq.com/images?uuid=531d6274-c107-43b7-ae0c-3c2acbbc99ae',
        url: 'http://m.xgqq.com/#find/view%7Eid=3626'
      },
      {
        img: 'https://apixsxzz.xgqq.com/images?uuid=a183a1ec-8e3a-4009-863d-2cd32162f0e7',
        url: 'http://m.xgqq.com/#find/view~id=3479&showHeader=0'
      }
    ],
    newList: [
      {
        'date': '2018-5-2',
        'task': [{
          'time': '14:05',
          'action': 'WorkOn',
          'place': 'yb'
        }, {
          'time': '14:08',
          'action': 'SpotSearch',
          'place': '-'
        }, {
          'time': '14:10',
          'action': 'WorkOff',
          'place': '-'
        }, {
          'time': '14:20',
          'action': 'WorkOn',
          'place': 'yb'
        }, {
          'time': '14:26',
          'action': 'WorkOff',
          'place': '-'
        }]
      }, {
        'date': '2018-5-10',
        'task': [{
          'time': '11:05',
          'action': 'WorkOn',
          'place': 'yb'
        }, {
          'time': '14:08',
          'action': 'SpotSearch',
          'place': '-'
        }, {
          'time': '18:10',
          'action': 'WorkOff',
          'place': '-'
        }, {
          'time': '18:35',
          'action': 'WorkOn',
          'place': 'yb'
        }, {
          'time': '20:26',
          'action': 'WorkOff',
          'place': '-'
        }]
      }, {
        'date': '2018-5-27',
        'task': [{
          'time': '14:05',
          'action': 'WorkOn',
          'place': 'yb'
        }, {
          'time': '14:08',
          'action': 'SpotSearch',
          'place': '-'
        }, {
          'time': '14:10',
          'action': 'WorkOff',
          'place': '-'
        },
        {
          'time': '14:20',
          'action': 'WorkOn',
          'place': 'yb'
        },
        {
          'time': '14:26',
          'action': 'WorkOff',
          'place': '-'
        }]
      }
    ],
    investList: [
      {
        pid: '5',
        title: '603号',
        apr: '12',
        date: '16',
        money: '50',
        invest_amount: '57250',
        iconClass: 'titnew',
        dataid: '6051'
      },
      {
        pid: '2',
        title: '4653号11期',
        apr: '9',
        date: '37',
        money: '1000',
        invest_amount: '0',
        iconClass: 'tits',
        dataid: '6053'
      },
      {
        pid: '7',
        title: '755号5期',
        apr: '8~8.7',
        date: '7',
        money: '100',
        invest_amount: '647000',
        iconClass: 'tit',
        dataid: '6055'
      }
    ]
  }
}

export default state
