import { PATHS } from '@/routes/page'

export default function NoteFoundView() {
  return (
    <div className="py-5 bg-background min-h-[calc(100dvh-365px)] flex flex-col justify-center lg:min-h-[calc(100dvh-616px)] ">
      <div className="px-4 py-12 space-y-4 lg:space-y-12">
        <div>
          <p className="text-primary-500 desktop-light-h5 text-center lg:desktop-light-h1">ERROR</p>
          <p className="text-primary-500 desktop-bold-number-3 text-center lg:desktop-bold-number-1">
            404
          </p>
        </div>

        <p className="text-primary-500 desktop-light-h5 text-center lg:desktop-light-h4">
          您嘗試造訪的頁面不存在或已被移動。
          <br />
          嘗試返回我們的主頁。
        </p>

        <div className="flex justify-center items-center">
          <a href={PATHS.Home.path} className="btn-solid btn-hover lg:min-w-[410px]">
            返回主頁
          </a>
        </div>
      </div>
    </div>
  )
}
