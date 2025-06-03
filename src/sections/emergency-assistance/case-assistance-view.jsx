import Image from 'next/image'
import Link from 'next/link'
import CaseAssistanceSwiperContainer from './case-assistance-swiper-container'

const QA_QUESTIONS = [
  {
    question: '1. 如何幫助受困者？',
    answer:
      '您可以通過捐款或參與志願服務來幫助受困者。我們提供多種捐款方式，包括單筆捐款和定期捐款，您可以選擇最方便的方式進行支持。此外，您也可以報名參加我們的志願者計劃，實際參與到救援行動中，提供物資分發、心理支持等服務。',
  },
  {
    question: '2. 如何匯款捐款？',
    answer:
      '您可以通過銀行轉帳、線上支付平台或郵政劃撥進行捐款。我們的銀行帳戶和支付平台資訊會在官網上詳細列出。完成匯款後，請保留匯款憑證，並在我們的捐款系統中登記，以便我們確認您的捐款並發放收據。',
  },
  {
    question: '3. 如何聯繫我們？',
    answer:
      '如果您有任何疑問或需要更多資訊，您可以通過電話、電子郵件或我們的線上客服系統聯繫我們。我們的聯繫方式都會在官網的「聯繫我們」頁面中列出，客服團隊會在工作時間內儘快回覆您的問題。',
  },
  {
    question: '4. 我可以指定捐款用途嗎？',
    answer:
      '是的，您可以在捐款時指定款項用途，例如特定的救援計劃或專項基金。請在捐款時註明您的意向，我們會確保您的捐款用於指定的項目，您也可於會員資料中查詢捐款使用方式。',
  },
]

function CaseAssistanceView() {
  return (
    <div className="pb-10 lg:mx-10">
      <div className="max-w-650 mx-auto bg-white rounded-2xl shadow-wrapper px-4 py-9 lg:max-w-[1600px] lg:p-[44px]">
        <div className="flex justify-center items-center gap-x-1 lg:gap-x-2">
          <Image
            src="/images/deco-spring-l-01.png"
            alt="deco-spring-l"
            width={81}
            height={100}
            className="aspect-[81/100] w-10 lg:w-[90px] lg:aspect-[89/92]"
          />

          <div className="space-y-1 w-[100px] lg:w-40">
            <h2 className="text-brown-700 desktop-regular-h5 text-center lg:desktop-regular-h2">
              各案援助
            </h2>
            <p className="h-[1px] w-full bg-brown-700 lg:h-[2px]" />
          </div>

          <Image
            src="/images/deco-spring-r-01.png"
            alt="deco-spring-r"
            width={81}
            height={100}
            className="aspect-[81/100] w-10 lg:w-[90px] lg:aspect-[89/92]"
          />
        </div>

        <div className="h-[1px] bg-brown-700 opacity-100 mt-[22px] mb-9" />

        {/* Way to help */}
        <div className="space-y-6">
          <h3 className="text-primary-700 desktop-bold-h5 text-center lg:desktop-bold-h4">
            救助辦法
          </h3>

          <div className="space-y-6 lg:mx-auto lg:max-w-[931px]">
            <div className="space-y-6">
              <p className="text-brown-700 desktop-regular-p">
                我們的慈善協會深知在緊急情況下，及時的援助至關重要。因此，我們設立了多元化的救助辦法，旨在迅速為有需要的人提供幫助。無論是天災、意外事故還是突發的健康危機，我們都在第一時間響應，為受困者及其家人提供必要的支持。
                <br />
                <br />
                <span className="text-primary-700 desktop-bold-h6">
                  我們的救助辦法包括「金錢援助」與「實際行動」兩個層面。
                </span>
              </p>

              <CaseAssistanceSwiperContainer />

              <p className="text-brown-700 desktop-regular-h6">
                對於急需經濟支持的受助者，我們提供靈活且迅速的金錢援助，以幫助他們渡過困難時期。這些援助款項可以用於醫療費用、生活必需品以及其他應急支出。
                <br />
                此外，我們也鼓勵社會各界人士報名參與志願服務，實際參與到救援行動中。志願者可以在災區協助分發物資、提供心理支持或參與救援行動。我們相信，集體的力量能夠在關鍵時刻帶來更大的影響，幫助受災者重建生活。
                <br />
                <br />
                透過這些救助辦法，我們希望能夠為受困者帶來實際的幫助，並且讓更多的人參與到慈善行動中，共同為社會帶來希望與改變。
              </p>
            </div>

            <div className="space-y-2">
              <h3
                className="text-primary-700 desktop-bold-h5 text-center p-[14px]"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(60,114,105,0) 10%, rgba(60,114,105,0.30155812324929976) 30%, rgba(60,114,105,0.3) 70%, rgba(60,114,105,0) 90%);',
                }}
              >
                我也想盡一份力，參與其中！
              </h3>
              <div className="flex flex-col gap-[22px] lg:flex-row">
                <Link
                  href="/"
                  className="relative h-[170px] overflow-hidden rounded-2xl bg-cover bg-center bg-[url('/images/donate-bg-01.png')] flex items-center justify-center group lg:flex-1"
                >
                  <div
                    className="absolute w-full h-full z-0 top-0 left-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(81,73,49,0) 0%, rgba(81,73,49,0.7) 80%, rgba(81,73,49,1) 100%)',
                    }}
                  />
                  <p className="relative z-20 text-white text-opacity-50 desktop-regular-h4 duration-200 group-hover:text-opacity-100">
                    直接捐款
                  </p>
                </Link>
                <Link
                  href="/"
                  className="relative h-[170px] overflow-hidden rounded-2xl bg-cover bg-center bg-[url('/images/form-bg-01.png')] flex items-center justify-center group lg:flex-1"
                >
                  <div
                    className="absolute w-full h-full z-0 top-0 left-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(81,73,49,0) 0%, rgba(81,73,49,0.7) 80%, rgba(81,73,49,1) 100%)',
                    }}
                  />
                  <p className="relative z-20 text-white text-opacity-50 desktop-regular-h4 duration-200 group-hover:text-opacity-100">
                    救助表單下載
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-brown-700 opacity-100 mt-12 mb-9" />

        {/* Q&A */}
        <div className="space-y-6">
          <h3 className="text-primary-700 desktop-bold-h5 text-center lg:desktop-bold-h4">
            注意事項 Q&A
          </h3>
          <div className="lg:mx-auto lg:max-w-[931px]">
            <ul className="space-y-6">
              {QA_QUESTIONS.map((item) => (
                <li className="space-y-3" key={item.question}>
                  <h5 className="text-primary-700 desktop-bold-h6">{item.question}</h5>
                  <p className="text-dark-700 mobile-regular-h5 lg:desktop-regular-p">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseAssistanceView
