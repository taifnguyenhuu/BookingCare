import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Người truyền cảm hứng</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/Llw9Q6akRo4?list=PLE_DkwW5bt2F-BJ-tmof9GzMbS2aQ5EP7"
              title="LẠC TRÔI | OFFICIAL MUSIC VIDEO | SƠN TÙNG M-TP"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Casio PX-S1000 là một cây đàn đơn giản dể sử dụng nhờ vào bảng
              điều khiển cảm ứng. Chạm vào bảng điều khiển phí trên các phím đàn
              và các điều khiển sẽ xuất hiện. Khi không sử dụng, bảng điều khiển
              sẽ tắt đi giúp bạn tập trung vào việc biểu diễn mà không bị phân
              tâm. Tất cả những chức năng của cây đàn đều nằm ngay trước mặt
              bạn, bao gồm cả tùy chọn âm sắc mà không cần truy cập vào bất cứ
              menu nào.
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
