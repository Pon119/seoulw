import React, { useState } from 'react'
import policyStyle from "@/styles/policy.module.scss";
import { useRouter } from 'next/router';

const Policy = () => {
  const router = useRouter();
  // const { type } = router.query;
  const [tab, setTab] = useState(0);


  return (
    <div className={policyStyle.policyWrap}>
      <ul className={policyStyle.tabBtnWrap}>
        <li
          className={tab == 0 ? policyStyle.selected : ""}
          onClick={() => {setTab(0);}}
        >
          이용약관
        </li>
        <li
          className={tab == 1 ? policyStyle.selected : ""}
          onClick={() => {setTab(1);}}
        >
          개인정보처리방침
        </li>
      </ul>
      <div className={policyStyle.textWrap}>
        {/* [↓] 이용약관 */}
        <article className={`${policyStyle.termsOfUse} ${tab === 0 ? policyStyle.show:''}`}>
        {/* <h2>㈜서울,W 이용약관</h2> */}
          <h3>[제 1장 총칙]</h3>
          <div>
            <h4>제1조 (목적)</h4>
            <ul>
              <li>
                이 약관(이하 “약관”이라 합니다)은 ㈜서울,W(이하 "회사"라 합니다)이 운영하는 웹(Web) 및 앱(App, 어플리케이션) 등 을 통하여 제공하는 전자상거래 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 회사와 이용자 사이의 권리, 의무 및 책임사항,
                이용조건 및 절차 등 기본적인 사항을 정하는 것을 목적으로 합니다.
              </li>
            </ul>
          </div>

          <div>
            <h4>제2조 (정의)</h4>
            <ul>
              <li>① "서울W"라 함은 회사가 상품 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 또는 용역을 거래할 수 있도록 설정한 가상의 영업장 웹(Web)∙앱(App) 등의 제반 서비스를 말하며, “오픈마켓”을 포함함과 동시에 사이버 몰을
                운영하는 사업자의 의미로도 사용합니다. 단, 회사에서 직접 운영하는 투어, 티켓 사이트(웹/앱)에 한하며 회사가 직접 운영하고 있지 않은 다른 탭의 쇼핑, 도서 사이트(웹/앱) 및 www.playdb.co.kr은 제외합니다.</li>
              <li>② "이용자"라 함은 서비스에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 이용하는 이용 고객을 말하며, 회원 및 비회원을 통칭합니다.</li>
              <li>③ "회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
              <li>④ "비회원"이라 함은 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
              <li>⑤ "회원"이라 함은 회사의 티켓예매/ENT서비스에 개인정보를 제공하고, 회원등록을 한 자로서 회비를 납부한 후 회원 기간 내 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 유료회원 서비스를 이용할 수 있는 회원으로 티켓 부문에 한합니다.</li>
              <li>⑥ "어린이 회원"이라 함은 회사에 보호자의 동의를 얻어 개인정보를 제공하고 회원으로 등록한 만14세 미만의 자로서, 회사의 정보를 제공받고, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 의미합니다.</li>
              <li>⑦ "판매자"라 함은 “서울,E”에서의 판매를 위하여 회사와 서비스 이용계약을 체결한 자를 말하며, 물품을 판매할 의사로 해당 물품을 회사가 온라인으로 제공하는 양식에 맞추어 등록한 자의 의미로도 사용합니다.</li>
              <li>⑧ "구매자"라 함은 상품 또는 용역을 구입할 의사를 회사가 온라인으로 제공하는 양식에 맞추어 밝힌 이용자를 말하며, 회원 및 비회원 구매자 모두를 의미합니다.</li>
              <li>⑨ "게시물"이라 함은 회원 및 이용 고객이 서비스에 게시 또는 등록하는 부호(URL 포함), 문자, 음성, 음향, 영상(동영상 포함), 이미지(사진 포함), 파일 등을 말합니다.</li>
              <li>⑩ "쿠폰"이라 함은 회원이 서비스를 이용할 때 표시된 금액 또는 비율만큼 이용 금액을 할인 받을 수 있는 할인권∙우대권 등(온라인∙모바일∙오프라인 등 형태를 불문)를 말합니다. 쿠폰의 종류 및 내용은 회사의 정책에 따라 달라질 수 있습니다.</li>
              <li>⑪ "I-Point"라 함은 회사가 회원의 서비스 이용에 따른 혜택 또는 서비스 이용상 편의를 위해 회원에게 제공하는 것으로서 서울,E 및 서울,E의 제휴 사이트(회사에서 운영하고 있지 않은 도서, 쇼핑 사이트(앱/웹) 제외)에서 상품 등 결제 시 활용할 수 있는 수치화 된 가상의
                데이터를 말합니다. 구체적인 이용 방법, 그 명칭 등은 회사의 정책에 따라 달라질 수 있습니다.</li>
            </ul>
          </div>
          
          <div>
            <h4>제3조 (약관의 효력 및 변경)</h4>
            <ul>
              <li>① 회사는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편주소 등) 등을 이용자가 알 수 있도록 회사의 초기 서비스화면(전면)에 게시합니다. 다만 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</li>
              <li>② 회사는 약관의 규제에 관한 법률, 전자상거래 등에서의 소비자보호에 관한 법률, 소비자기본법 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정하며, 본 약관에서 정하지 아니한 사항과 약관의 해석에 관하여는 관련 법령 및 정부 기관의 해석 또는 일반적인 상관례에 따릅니다.</li>
              <li>③ 회사가 약관을 개정할 경우에는 적용 일자 및 개정사유를 명시하여 현행약관과 함께 회사의 초기화면이나 팝업화면에 그 적용 일자 7일 이전부터 적용 일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을
                두고 공지합니다.</li>
              <li> ④ 개정된 약관에 동의하지 않는 이용자는 회사에 회원 탈퇴(이용계약의 해지)를 요청할 수 있습니다. 다만, 회사가 제3항에 따라 이용자에게 개정약관 적용일까지 거부 의사를 표시하지 않으면 약관 개정에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 이용자가 명시적으로
                개정약관에 대한 거부 의사를 표시하지 않으면 개정약관에 동의한 것으로 간주됩니다.</li>
              <li>⑤ 이용자가 가입 시 동의한 약관에 대해서 이용자가 열람을 요구할 경우, 이용자가 가입 시 기재한 전자우편으로 링크형태로 전송됩니다.</li>
              <li>⑥ 본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생하며, 본 약관에 동의하지 않거나 약관을 준수하지 않는 경우 회사의 앱(App)에 대한 접근 및 모든 서비스의 이용은 금지됩니다. 단, 일부 특정 서비스의 경우 본 약관이 아닌 회사에 해당 서비스를
                제공하는 사업자의 약관이 적용됩니다(자세한 안내는 각 서비스 영역에 별도 표시).</li>
              <li>⑦ 이용자는 회사의 앱(App)에 접근하여 서비스를 이용할 경우 본 약관 및 관련 운영 정책을 확인 및 준수하고, 약관 변경에 대하여 주의의무를 다하여야 하며, 변경된 약관의 부지로 인한 이용자의 피해는 회사가 책임지지 않습니다.</li>
            </ul>
          </div>
        </article>

        {/* [↓] 개인정보처리방침 */}
        <article className={`${policyStyle.personalInfo} ${tab === 1 ? policyStyle.show:''}`}>
          <div>
            <h3>1. 개인 정보의 처리목적</h3>
            <p>회사는 다음의 목적을 위하여 개인 정보를 처리합니다.</p>
            <ul>
              <li>
                <h4>가. 서비스 이행</h4>
                <p>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금 정산, 콘텐츠 제공, 구매 및 요금 결제, 물품 배송 또는 청구지 등 발송, 금융 거래 본인 인증 및 금융 서비스, 얼굴 입장(인식) 서비스 이용 시 사용자 인증 및 예매내역 확인 목적으로 개인정보를 처리합니다.</p>
              </li>
              <li>
                <h4>나. 이용자 관리</h4>
                <p>서비스 이용에 따른 본인 확인, 개인 식별, 불량 이용자의 부정 이용 방지와 비인가 사용 방지, 이용 의사 확인, 이용 횟수 제한, 연령 확인, 불만 처리 등 민원 처리, 고지 사항 전달, 탈퇴 의사 확인 목적으로 개인정보를 처리합니다.</p>
              </li>
              <li>
                <h4>다. 마케팅 및 광고에 활용</h4>
                <p>신규 서비스(제품) 개발 및 특화, 이벤트 등 영리 목적의 광고성 정보 전송(전화, 이메일, 문자 등), 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 이용자의 서비스 이용에 대한 통계 목적으로 개인정보를 처리합니다.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3>2. 처리하는 개인정보 항목</h3>
            <p>회사는 이용자에게 다양한 서비스를 제공하기 위해 다음과 같은 개인 정보를 처리하고 있습니다.</p>
            <ul>
              <li>
                <h4>가. 서비스 이용 시 아래와 같은 개인 정보를 제공 받아 이용합니다.</h4>
                <p>이메일 주소, 휴대폰 번호, 이름, 성별, 생년 월일 , 암호화된 동일인 식별 연계 정보(CI)</p>
              </li>
              <li>
                <h4>나. 회사는 서비스 이용 중 다음과 같은 개인 정보를 추가 수집할 수 있습니다.</h4>
                <p>고객상담 및 민원 접수에 대한 처리 결과 안내이메일, 문의내용(선택) 첨부파일, 회원 본인 인증 정보(이용자의 식별 및 본인여부, 인증 날짜, 회원번호, 내/외국인정보, 휴대폰번호/통신사, 암호화된 이용자 확인 값(CI), 중복가입확인정보(DI)), 기기 고유값(iOS: UUID/AOS: 안드로이드 고유값), 기기 모델명</p>
              </li>
              <li>
                <h4>다. 서비스 이용과정에서 아래와 같은 정보가 생성되어 수집될 수 있습니다.</h4>
                <p>IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록, 모바일 서비스 이용시 단말기 정보(단말기 모델, OS 유형, 이동통신사 정보, 하드웨어 ID, 광고 ID, 서비스 이용에 대한 기본 통계), 어플리케이션 설치 정보</p>
              </li>
            </ul>
          </div>

          <div>
            <h3>3. 개인정보의 보유 및 이용기간</h3>
            <ul>
              <li>
                가. 회사는 원칙적으로 이용자의 개인정보를 서비스 탈퇴 시까지 보유합니다. 단, 개인정보 도용 등으로 인한 원치 않는 서비스 탈퇴 등에 대비하기 위하여 서비스 탈퇴 요청 후 3일 간 개인정보를 보존합니다.
              </li>
              <li>
                나. 서비스 탈퇴 시 불량 이용자 재가입 및 부정이용 방지목적을 위해 내부 식별정보를 1년간 보존합니다.
              </li>
              <li>
                다. 회사는 이용자가 1년 이상 로그인 기록이 없는 경우, 개인정보의 안전한 보호 및 피해를 방지하기 위해 이용자에게 사전통지하고 개인정보를 별도로 분리하여 저장 관리합니다.
              </li>
              <li>
                라. 회사는 휴면전환(또는 휴면탈퇴) 30일 전 전자메일을 통해 사전통지하며, 휴면처리된 계정의 경우 휴면 전환일로부터 이후 4년간 재이용이 없는 경우 분리 보관된 이용자의 정보를 완전히 파기합니다. 다만, 이용자가 서비스 재이용을 원하실 경우에는 로그인 후 "아이디 재사용 동의"절차를 거쳐 서비스를 재이용하실 수 있습니다.
                <p>부정이용 기록 보존 근거 : 부정이용 방지 보존 기간 : 회원탈퇴 후 1년</p>
                그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 이용자정보를 보관합니다.
                <p>보존 항목 : 계약 또는 청약철회 등에 관한 기록 보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률 보존 기간 : 5년</p>
                <p>보존 항목 : 대금결제 및 재화 등의 공급에 관한 기록 보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률 보존 기간 : 5년</p>
                <p>보존 항목 : 소비자의 불만 또는 분쟁처리에 관한 기록 보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률 보존 기간 : 3년</p>
                <p>보존 항목 : 웹사이트 방문기록 보존 근거 : 통신비밀보호법 보존 기간 : 3개월</p>
              </li>
            </ul>
          </div>

          <div>
            <h3>4. 개인정보의 파기</h3>
            <p>이용자의 개인정보는 원칙적으로 개인정보의 처리목적이 달성되면 지체 없이 파기합니다. 회사의 개인정보 파기절차 및 방법은 다음과 같습니다.</p>
            <ul>
              <li>
                <h4>가. 파기절차</h4>
                <p>이용자가 서비스 이용 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우를 제외한 다른 목적으로 이용되지 않습니다.</p>
              </li>
              <li>
                <h4>나. 파기방법</h4>
                <p>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
              </li>
            </ul>
          </div>

        </article>
      </div>
    </div>
  )
}

export default Policy