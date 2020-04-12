var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'python３８２更新', 'text': '\n 首先到" https://www.python.org/downloads/release/python-382/ "下載Window x86-64 executable installer，下載完後，執行python-3.8.2-amd64.exe\xa0 \n 選Customize installation，再uncheck pip option，就可以繼續安裝置完成。 \n 進入安裝號的對應目錄複製檔案到 " 201906_fall/data" \n SciTE下載: 從 "\xa0 https://www.scintilla.org/SciTEDownload.html \xa0" 下載 " \xa0 full 64-bit download \xa0" 載完病解壓縮後，搬移至data下(有需要的話)，接著到相應的目錄執行SciTE.exe，開啟後到 OPTION>>>OPEN GLOBAL OPTION FILE進行切換到UTF-8編碼即開啟即時更新:\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 將code.page=0更改成code.page=65001(切換到UTF-8編碼)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 將#load.on.activate=1的井字號拿掉(開啟即時更新)，儲存，關閉SciTE。\xa0 \n ＭＳＹＳ２下載： https://www.msys2.org/ \xa0\u3000下載msys2-x86_64-20190524.exe\xa0並執行\u3000，點選Ｂｒｏｗｓｅ，選擇２０１９０６＿ｆａｌｌ／ｄａｔａ後，就可開始安裝，安裝結束後，ｕｎｃｈｅｃｋRun MSYS2 64bit now，結束下載流程。 \n protablegit下載: https://git-scm.com/download/win \xa0下載\xa064-bit Git for WindowsPortable安裝在data目錄下 \n pip下載:到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到CD2020/data執行，到cmd 輸入python get-pip.py開始下載，下載完成後輸入pip，測試pip是否正常運行。 \n 下載可在python使用的模組flask,bs4,xml,elican, mrkdown,flask_cors,leo，指令為pip install flask bs4 lxml pelican markdown flask_cors leo \n git clone 整個倉儲到 data 目錄下並命名目錄為 tmp \n putty下載:下載 putty 放到data裡面，把之前的ssh和.gitconfig放到home裡面測試是否可以成功用ssh推送資料。 \n', 'tags': '', 'url': 'python３８２更新.html'}, {'title': '亂數分組:', 'text': '亂數分組: \n https://mde.tw/wcm2020/downloads/2020spring_wcm_1a_list.txt \xa0was taken from\xa0 https://osa.nfu.edu.tw/ \xa0on Feb. 19, 2020. \n The most updated list:\xa0 http://s1.mde.nfu.edu.tw:8000/?semester=1082&courseno=0744 \xa0 \n semester: 1082 \n courseno: 0744 \n Under https protocol use port 7443, for http use port 8000. \n 學員名單 URL:     ', 'tags': '', 'url': '亂數分組:.html'}, {'title': '每周直播內容', 'text': '', 'tags': '', 'url': '每周直播內容.html'}]};