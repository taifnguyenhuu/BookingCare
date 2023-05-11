import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói về BookingCare
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/ZHZnfwoqsHs"
              title="VITV - Startup 360 - Bác sĩ và bệnh nhân nói về BookingCare"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              BookingCare là nền tảng đặt lịch khám bệnh đầu tiên ở nước ta, kết
              nối với trên 80 bệnh viện, phòng khám tại Hà Nội và Tp.HCM.
              BookingCare tập trung vào đặt lịch khám nhóm bệnh chuyên khoa,
              bệnh mạn tính, những người biết rõ tình trạng của mình, chủ động
              sắp xếp kế hoạch đi khám và bệnh không có tính chất cấp cứu, Sau
              hơn 2 năm chính thức ra mắt, đến nay BookingCare đã phục vụ hơn
              40.000 nghìn lượt người đi khám thành công tại các bệnh viện,
              phòng khám. BookingCare đang hợp tác triển khai đặt khám theo yêu
              cầu tại một số bệnh viện lớn tại Hà Nội như Bệnh viện Việt Đức,
              Bệnh viện Thanh Nhàn, Bệnh viện Da liễu Hà Nội, Bệnh viện Châm cứu
              Trung ương, Bệnh viện Đa khoa Bảo Sơn, Bệnh viện Quốc tế Thu Cúc…
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
