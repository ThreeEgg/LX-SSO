import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ServicesItem from './ServicesItem';
import styles from './Services.less';


class ServicesList extends Component {

  state = {
    servicesList: [
      {
        id: '11111',
        image: 'https://www.baidu.com/link?url=sG9Pysc7YukC463dY6BVTG8mdNGJkEwTQ9zF6ViDC2wQ4g_aZ4IJixU4KDeaptgaV6SdFbSTpWlC2q4E-2-sIGrblAUwyykuu_4e5ad5fMn4p8wbS_VHUnY2ov4h_CdlBswdg9jeBbzwzG2KueuraYj1mhTb7OUpa7cCuYAgw24LSg984JBYZW8qm431nyHjw0HHQT0a3dXcCYeclCorVEUEUYo8Ua_uUaDpXaE_qZ9NcKftg_9JDb5Jpgw9urBzraf2Yg2MJEG69TZNX_obyjyjPjFjac6aDSGoanREtg4TcohhbZh0IOcmita4NV9PXjHabpfD_VZc4FF9XrcUVWC9VXSJnGhcGG68ZLp0lbRvpMMEa8yD6Th7l19V9ZTDdO7vEUdlkXUKuODYN-I91KxbV0qCGD2kWcFs09cFfUmh7hPFouJuGzg6BxCcTX651vS5f4o21fDVWwra_7gGe8Jv4FetXKYImV6OWo9hnXaEHdXSMLWBgxaSa9Wpi2wAh_NFKLwUJZOvjBKURFI-XgicekenoMf7s7yJIJu1kMSYORdVoAEl3z7ExVc6sDnpvoF5BrvgGZ9dOv9jFRr6B7LHNffXLTo116KYF0QfN3pJpSbvnzP9eqLJrvg6cXyFm8FEk31fk8LomnjrBPN238lDEPmOE142rkx6nZl7cxJZ1QxB73MBSX4Knq3s6VrF&wd=&eqid=e1e1c9210005fb2e000000025f5f24d7',
        name: '云安全',
        desc: '这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述。'
      },
      {
        id: '22222',
        image: 'https://www.baidu.com/link?url=sG9Pysc7YukC463dY6BVTG8mdNGJkEwTQ9zF6ViDC2wQ4g_aZ4IJixU4KDeaptgaV6SdFbSTpWlC2q4E-2-sIGrblAUwyykuu_4e5ad5fMn4p8wbS_VHUnY2ov4h_CdlBswdg9jeBbzwzG2KueuraYj1mhTb7OUpa7cCuYAgw24LSg984JBYZW8qm431nyHjw0HHQT0a3dXcCYeclCorVEUEUYo8Ua_uUaDpXaE_qZ9NcKftg_9JDb5Jpgw9urBzraf2Yg2MJEG69TZNX_obyjyjPjFjac6aDSGoanREtg4TcohhbZh0IOcmita4NV9PXjHabpfD_VZc4FF9XrcUVWC9VXSJnGhcGG68ZLp0lbRvpMMEa8yD6Th7l19V9ZTDdO7vEUdlkXUKuODYN-I91KxbV0qCGD2kWcFs09cFfUmh7hPFouJuGzg6BxCcTX651vS5f4o21fDVWwra_7gGe8Jv4FetXKYImV6OWo9hnXaEHdXSMLWBgxaSa9Wpi2wAh_NFKLwUJZOvjBKURFI-XgicekenoMf7s7yJIJu1kMSYORdVoAEl3z7ExVc6sDnpvoF5BrvgGZ9dOv9jFRr6B7LHNffXLTo116KYF0QfN3pJpSbvnzP9eqLJrvg6cXyFm8FEk31fk8LomnjrBPN238lDEPmOE142rkx6nZl7cxJZ1QxB73MBSX4Knq3s6VrF&wd=&eqid=e1e1c9210005fb2e000000025f5f24d7',
        name: '催收系统',
        desc: '这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述。'
      },
      {
        id: '33333',
        image: 'https://www.baidu.com/link?url=sG9Pysc7YukC463dY6BVTG8mdNGJkEwTQ9zF6ViDC2wQ4g_aZ4IJixU4KDeaptgaV6SdFbSTpWlC2q4E-2-sIGrblAUwyykuu_4e5ad5fMn4p8wbS_VHUnY2ov4h_CdlBswdg9jeBbzwzG2KueuraYj1mhTb7OUpa7cCuYAgw24LSg984JBYZW8qm431nyHjw0HHQT0a3dXcCYeclCorVEUEUYo8Ua_uUaDpXaE_qZ9NcKftg_9JDb5Jpgw9urBzraf2Yg2MJEG69TZNX_obyjyjPjFjac6aDSGoanREtg4TcohhbZh0IOcmita4NV9PXjHabpfD_VZc4FF9XrcUVWC9VXSJnGhcGG68ZLp0lbRvpMMEa8yD6Th7l19V9ZTDdO7vEUdlkXUKuODYN-I91KxbV0qCGD2kWcFs09cFfUmh7hPFouJuGzg6BxCcTX651vS5f4o21fDVWwra_7gGe8Jv4FetXKYImV6OWo9hnXaEHdXSMLWBgxaSa9Wpi2wAh_NFKLwUJZOvjBKURFI-XgicekenoMf7s7yJIJu1kMSYORdVoAEl3z7ExVc6sDnpvoF5BrvgGZ9dOv9jFRr6B7LHNffXLTo116KYF0QfN3pJpSbvnzP9eqLJrvg6cXyFm8FEk31fk8LomnjrBPN238lDEPmOE142rkx6nZl7cxJZ1QxB73MBSX4Knq3s6VrF&wd=&eqid=e1e1c9210005fb2e000000025f5f24d7',
        name: '小Go机器人',
        desc: '这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述。'
      },
      {
        id: '44444',
        image: 'https://www.baidu.com/link?url=sG9Pysc7YukC463dY6BVTG8mdNGJkEwTQ9zF6ViDC2wQ4g_aZ4IJixU4KDeaptgaV6SdFbSTpWlC2q4E-2-sIGrblAUwyykuu_4e5ad5fMn4p8wbS_VHUnY2ov4h_CdlBswdg9jeBbzwzG2KueuraYj1mhTb7OUpa7cCuYAgw24LSg984JBYZW8qm431nyHjw0HHQT0a3dXcCYeclCorVEUEUYo8Ua_uUaDpXaE_qZ9NcKftg_9JDb5Jpgw9urBzraf2Yg2MJEG69TZNX_obyjyjPjFjac6aDSGoanREtg4TcohhbZh0IOcmita4NV9PXjHabpfD_VZc4FF9XrcUVWC9VXSJnGhcGG68ZLp0lbRvpMMEa8yD6Th7l19V9ZTDdO7vEUdlkXUKuODYN-I91KxbV0qCGD2kWcFs09cFfUmh7hPFouJuGzg6BxCcTX651vS5f4o21fDVWwra_7gGe8Jv4FetXKYImV6OWo9hnXaEHdXSMLWBgxaSa9Wpi2wAh_NFKLwUJZOvjBKURFI-XgicekenoMf7s7yJIJu1kMSYORdVoAEl3z7ExVc6sDnpvoF5BrvgGZ9dOv9jFRr6B7LHNffXLTo116KYF0QfN3pJpSbvnzP9eqLJrvg6cXyFm8FEk31fk8LomnjrBPN238lDEPmOE142rkx6nZl7cxJZ1QxB73MBSX4Knq3s6VrF&wd=&eqid=e1e1c9210005fb2e000000025f5f24d7',
        name: '人力协同',
        desc: '这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述。'
      },
      {
        id: '55555',
        image: 'https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=1853975367,3114882919&os=1027814197,2121451103&simid=3295621065,216385332&pn=23&rn=1&di=148610&ln=30&fr=&fmq=1390280702008_R&fm=&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&oriquery=%E5%9B%BE%E7%89%87%E5%A4%B4%E5%83%8F&objurl=http%3A%2F%2Fimg1.3lian.com%2Fgif%2Fmore%2F11%2F201210%2Ff119007d442b44bafd76059ede185e72.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined',
        name: '个性化',
        desc: '这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述,这里是描述。'
      }
    ]
  }

  render() {
    const { servicesList } = this.state;
    return (
      <div className={styles.ServicesList}>
        <div className="title">产品服务</div>
        <Row className="listShow" gutter={[18, 18]}>
          {
            servicesList.map(item => {
              return (
                <Col key={item.id} span={12}>
                  <ServicesItem propsItem={item} />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

export default ServicesList
