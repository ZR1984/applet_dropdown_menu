// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    dropDownMenu: [{
      id: 1,
      label: '产业',
      type: 'leftRight',
      children: [{
          id: 0,
          title: '不限',
          childModel: [{
            id: '0-1',
            title: '不限'
          }]
        },

        {
          id: 1,
          title: '一级产业',
          childModel: [{
              id: '1-1',
              title: '不限'
            },
            {
              id: '1-2',
              title: '二级产业标签'
            },
            {
              id: '1-3',
              title: '二级产业标签'
            },
          ]
        },
        {
          id: 2,
          title: '产业标签',
          childModel: [{
              id: '2-1',
              title: '不限'
            },
            {
              id: '2-2',
              title: '二级产业标签'
            },
            {
              id: '2-3',
              title: '二级产业标签'
            },
          ]
        }
      ],
    }, {
      id: 2,
      label: '区域',
      type: 'leftRight',
      children: [{
          id: 0,
          title: '街道',
          childModel: [{
              id: '0-1',
              title: '不限'
            },
            {
              id: '0-2',
              title: '某某街道'
            },
            {
              id: '0-3',
              title: '某某街道'
            }, {
              id: '0-4',
              title: '某某街道'
            }
          ]
        },
        {
          id: 1,
          title: '产业园区',
          childModel: [{
              id: '1-1',
              title: '不限'
            },
            {
              id: '1-2',
              title: '某某园区'
            },
            {
              id: '1-3',
              title: '某某园区'
            },
          ]
        },
      ]
    }, {
      id: 3,
      label: '租售',
      type: 'list',
      children: [{
          id: 0,
          title: '不限'
        }, {
          id: 1,
          title: '出租房源'
        },
        {
          id: 2,
          title: '出售房源'
        }
      ]
    }, {
      id: 4,
      label: '更多',
      type: 'more',
      children: [{
          id: "4-1",
          title: 'VR房源',
          children: [{
            id: '4-1-1',
            title: 'VR房源'
          }]
        }, {
          id: "4-2",
          title: '楼层位置',
          children: [{
            id: '4-2-1',
            title: '低层'
          }, {
            id: '4-2-2',
            title: '中层'
          }, {
            id: '4-2-3',
            title: '高层'
          }, ]
        },
        {
          id: "4-3",
          title: '装修',
          children: [{
            id: '4-3-1',
            title: '豪华装修'
          }, {
            id: '4-3-2',
            title: '精装修'
          }, {
            id: '4-3-3',
            title: '简单装修'
          }, {
            id: '4-3-4',
            title: '标准交付'
          }]
        },
        {
          id: "4-4",
          title: '楼宇年限',
          children: [{
            id: '4-4-1',
            title: '< 2年以内'
          }, {
            id: '4-4-2',
            title: '2-5年'
          }, {
            id: '4-4-3',
            title: '5-10年'
          }, {
            id: '4-4-4',
            title: '10年以上'
          }]
        }
      ]
    }],
  },
})
