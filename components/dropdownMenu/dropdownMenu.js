Component({
  properties: {
    dropDownMenu: {
      type: Array,
      value: [],
    },

    dropDownMenuSourceData: {
      type: Array,
      value: []
    },
    dropDownMenuStyleData: {
      type: Array,
      value: []
    },
    dropDownMenuFilterData: {
      type: Array,
      value: []
    },
  },
  data: {
    menuTitleID: null,
    menuChildType: null,
    isShowDropdownItem: null,
    isShowLeftRightType: null,
    isShowListType: null,
    isShowMoreType: null,
    leftRightMenuDataLeft: [],
    leftRightMenuDataRight: [],
    listMenuData: [],
    moreMenuData: [],
    selectedLeftID: null,
    selectedId: null,
  },
  methods: {
    clickMenuTitleFuc(e) {
      this.setData({
        isShowDropdownItem: !this.data.isShowDropdownItem
      })
      if (this.data.isShowDropdownItem) {
        this.setData({
          menuTitleID: e.currentTarget.dataset.titleid,
          menuChildType: e.currentTarget.dataset.type,
        })
        switch (this.data.menuChildType) {
          case 'leftRight':
            this.setData({
              isShowLeftRightType: true,
              isShowListType: false,
              isShowMoreType: false
            })
            let newArrLeft = []
            let newArrRight = []
            this.data.dropDownMenu.forEach(item => {
              if (item.id == this.data.menuTitleID) {
                item.children.forEach((j, index) => {
                  newArrLeft.push(j)
                  if (index == 0) {
                    this.setData({
                      selectedLeftID: j.id
                    })
                    j.childModel.forEach(i => {
                      newArrRight.push(i)
                    })
                  }
                })
                this.setData({
                  leftRightMenuDataLeft: newArrLeft,
                  leftRightMenuDataRight: newArrRight
                })
              }
            })
            break;
          case 'list':
            this.setData({
              isShowListType: true,
              isShowMoreType: false,
              isShowLeftRightType: false
            })
            this.data.dropDownMenu.forEach(item => {
              if (item.id == this.data.menuTitleID) {
                this.setData({
                  listMenuData: item.children
                })
              }
            })
            break;
          case 'more':
            this.setData({
              isShowMoreType: true,
              isShowLeftRightType: false,
              isShowListType: false,
            })
            this.data.dropDownMenu.forEach(item => {
              if (item.id == this.data.menuTitleID) {
                this.setData({
                  moreMenuData: item.children
                })
              }
            })
            break;
        }
      } else {
        this.setData({
          menuTitleID: null,
          menuChildType: null,
        })
      }
    },

    selectDistrictLeft(e) {
      var model = e.target.dataset.model.childModel
      this.setData({
        leftRightMenuDataRight: model ? model : '',
        selectedLeftID: e.target.dataset.model.id
      })
    },

    selectDistrictRight(e) {
      this.setData({
        selectedId: e.target.dataset.model.id,
      })
    },

    selectSourceItem(e) {
      this.setData({
        selectedId: e.target.dataset.model.id,
      })
    },

    selectFilterItem(e) {
      this.setData({
        selectedId: e.target.dataset.model.id,
      })
    },

    selectStyleItem(e) {
      this.setData({
        selectedId: e.target.dataset.model.id,
      })
    },

    clickNoChooseFuc() {
      this.setData({
        isShowListType: false,
        isShowLeftRightType: false,
        isShowMoreType: false,
        menuTitleID: null,
        isShowDropdownItem: false,
      })
    },
    clickSubmitFuc() {
      this.triggerEvent("selectedItem", {
        selectedId: this.data.selectedId
      })
      this.clickNoChooseFuc()
    }
  }
})