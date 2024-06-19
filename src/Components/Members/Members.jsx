import { Link } from "react-router-dom";
import Image from "../Image/Image";
import chatMemberCount from "../../Assets/Images/chatMemberCount.svg";
import addMembers from "../../Assets/Images/addMembers.svg";
import userA from "../../Assets/Images/user01.svg";
import userB from "../../Assets/Images/user02.svg";

import "./Members.style.scss";

function Members() {
  const MeberInfo = {
    MemberInfoPage: {
      memberPageTitle: "조직도",
      memeberPathTo: "/talk/taxTalk/member",
      prevPathTo: "/talk/taxTalk",
    },
    memberData: [
      {
        key: "userA",
        userName: "홍길동",
        userImage: userA,
        userStatus: "대리",
      },
      {
        key: "userB",
        userName: "김유신",
        userImage: userB,
        userStatus: "과장",
      },
    ],
  };

  const { MemberInfoPage, memberData } = MeberInfo;

  return (
    <li key="chatMemberCount" className="item_sideBarMenu item_members">
      <div className="title_members">
        <div className="image_sideBarIcon">
          <Image
            srcValue={chatMemberCount}
            altValue="말풍선이 겹쳐있는 이미지"
          />
        </div>
        <span className="text_sideBar">대화방 인원</span>
      </div>
      <Link
        to={MemberInfoPage.memeberPathTo}
        state={MemberInfoPage}
        role="button"
        className="link_addMember"
      >
        <div className="image_add">
          <Image
            srcValue={addMembers}
            altValue="플러스 이미지가 원 안에 위치한 이미지"
          />
        </div>
        <span className="text_addMeber">대화상대 추가</span>
      </Link>

      <ul className="list_member">
        {memberData.map(({ key, userName, userImage, userStatus }) => {
          return (
            <li key={key} className="item_member">
              <div className="image_member">
                <Image
                  srcValue={userImage}
                  altValue={`${userName} ${userStatus}의 프로필 이미지 `}
                />
              </div>
              <span className="text_memberName">{userName}</span>
              <span className="text_memberStatus">{userStatus}</span>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Members;
