<template>
    <section class="container-fluid">
        <div class="row" data-bs-spy="scroll" data-bs-target="#sideNav" data-bs-smooth-scroll="true" tabindex="0">
            <div class="col-12 banner p-0"  id="item-1">
                <img src="../assets/TravelMaker/TravelMaker_Banner.png" class="img-fluid" alt="...">
            </div>
            <div class="col-3 d-none d-lg-block"></div>
            <div class="col-12 col-lg-6 content">
                <div class="pt-5 border-start">
                    <div class="pt-5 pb-5 row justify-content-center">
                        <div class="col-12 col-md-8">
                            <img src="../assets/TravelMaker/TravelMaker_Intro.png" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div id="item-2" class="mt-5 mb-5">
                        <h2 class="text-center display-5 mt-5 mb-3 fw-bold">規劃旅遊行程</h2>
                        <img src="../assets/TravelMaker/TravelMaker_Plan.png" class="img-fluid" alt="">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-10 mt-4 mb-4">
                                <h5 class="text-center m-0">每次旅遊前，總是浪費大把時間排行程嗎？</h5>
                                <h5 class="text-center m-0">快來嘗試專為旅遊設計的行程規劃 App 吧！</h5>
                            </div>
                            <!-- button trigger popup -->
                            <div class="d-grid gap-2 col-8 col-lg-4 mx-auto mb-5">
                                <button class="btn btn-bts btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#PlanningPopup">Behind the scene</button>
                            </div>
                            <!-- popup -->
                            <div class="modal fade" id="PlanningPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog  modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4>Kickoff & Survey</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p class="p-0">Google 曾經推出旅遊行程規劃 App - Google Trip，僅上架一年後便停止營運。</p>
                                            <img src="../assets/TravelMaker/TravelMaker_RIP.png" class="img-fluid px-5" alt="">
                                            <p class="pt-3">於是我們團隊以年齡、職業、規劃方式、情境等方向設計了一份問卷，透過不同社群管道蒐集到超過兩百份的回饋，希望可以了解各族群規劃旅遊的方式。</p>
                                            <img src="../assets/TravelMaker/TravelMaker_SurveyResult.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                不同年齡層之規劃方式比例分布
                                            </figcaption>
                                            <p>其中不規劃旅程的人僅佔不到一成，而 30 歲以下的族群使用手機規劃的比率要大於電腦規劃，<strong>仍存在用手機規劃旅遊的需求。</strong></p>
                                            <p>取使用手機規劃行程比例最高的 19-22 歲作為目標族群，探究其使用習慣。</p>
                                            <img src="../assets/TravelMaker/TravelMaker_Insight.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                目標族群之不同旅遊規劃方式比例
                                            </figcaption>
                                            <img src="../assets/TravelMaker/TravelMaker_Insight2.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                目標族群規劃旅遊行程的參考資訊來源
                                            </figcaption>
                                            <p>由此歸納，目標族群規劃旅程的主要習慣為文字紀錄＋Google 搜尋。</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-3" class="mt-5">
                        <h2 class="text-center display-5 mb-5 fw-bold">選擇替代方案</h2>
                        <img src="../assets/TravelMaker/TravelMaker_Reschedule.png" class="img-fluid" alt="">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-10 mt-4 mb-4">
                                <h5 class="text-center m-0">旅遊時總是計劃趕不上變化嗎？</h5>
                                <h5 class="text-center m-0">輕鬆選擇鄰近的五星景點吧！</h5>
                            </div>
                            <!-- button trigger popup -->
                            <div class="d-grid gap-2 col-8 col-lg-4 mx-auto mb-5">
                                <button class="btn btn-bts btn-lg" type="button"  data-bs-toggle="modal" data-bs-target="#ReschedulePopup">Behind the scene</button>
                            </div>
                            <!-- popup -->
                            <div class="modal fade" id="ReschedulePopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog  modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4>Interview & Competitive Analysis</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>為深入探索 TA 的目標、需求與痛點，尋找了三名 19-22 歲使用手機規劃旅遊行程，且每月至少出遊一次的旅遊愛好者作訪談對象。</p>
                                            <p>在訪談過程中，請受訪者描述旅遊的過程、遇到的阻礙、使用手機的情境、前往下個行程的行動。</p>
                                            <img src="../assets/TravelMaker/TravelMaker_Persona.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                Persona of TravelMaker users.
                                            </figcaption>
                                            <p>透過訪談，我們發現受訪者開始不使用軟體的契機是在旅遊時計畫有變，臨時修改行程時會直接拿出 Google 搜尋景點，找到後就<strong>懶得回去修改行程了。</strong></p>
                                            <img src="../assets/TravelMaker/TravelMaker_CompetitiveAnalysis.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                市面上旅遊軟體的競品分析
                                            </figcaption>
                                            <p>競品分析中可以發現，替代行程功能是現有的旅遊相關產品中，尚未被強調、提供的服務，可能有未被滿足的需求。</p>
                                            <p>為了快速找到理想行程給使用者，我們分析訪談內容，從中建構出行程推薦的邏輯。</p>
                                            <img src="../assets/TravelMaker/TravelMaker_Reschedule2.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                分析訪談內容
                                            </figcaption>
                                            <img src="../assets/TravelMaker/TravelMaker_Reschedule3.png" class="img-fluid" alt="">
                                            <figcaption class="blockquote-footer text-center pt-3">
                                                行程推薦邏輯
                                            </figcaption>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item-4" class="mt-5 pb-5">
                        <img src="../assets/TravelMaker/TravelMaker_TA.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
            <div class="col-3 d-none d-lg-block">
                <nav id="sideNav" class="me-5">
                    <nav class="nav nav-pills flex-column me-5">
                        <a class="nav-link cursorDefault" href="#item-1">TravelMaker</a>
                        <a class="nav-link cursorDefault" href="#item-2">Planning</a>
                        <a class="nav-link cursorDefault" href="#item-3">Reschedule</a>
                        <a class="nav-link cursorDefault" href="#item-4">Target Audience</a>
                        <a class="nav-link cursorDefault" href="#item-5">Mockup</a>
                        <a class="nav-link cursorDefault" href="#item-6">User Experience</a>
                        <a class="nav-link cursorDefault" href="#item-7">Role & Try</a>
                    </nav>
                </nav>
            </div>
            <div id="item-5" class="col-12 heroPage mb-5 p-0">
                <img src="../assets/TravelMaker/TravelMaker_HeroPage.png" class="img-fluid" alt="">
            </div>
            <div class="col-3 d-none d-lg-block"></div>
            <div id="item-6" class="col-12 col-lg-6 content mb-5">
                <div class="row g-4 justify-content-center">
                    <div class="col-12">
                        <h2 class="text-center display-6 fw-bold">我們也重視您的使用體驗</h2>
                    </div>
                    <div class="col-10 col-md-5 col-lg-6 card-flow">
                        <!-- Card-1 -->
                        <div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#IAPopup">
                            <img src="../assets/TravelMaker/icon/Architecture.png" class="p-3 card-img-top" style="max-width: 150px; max-height: 150px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">有跡可循的資訊架構</h5>
                                <p class="card-text text-center">我們了解遲遲找不到功能、按鈕的煩躁感，我們精心規劃的資訊分層架構讓旅人快速完成操作、繼續旅程。</p>
                            </div>
                        </div>
                        <!-- Popup-1 -->
                        <div class="modal fade" id="IAPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4>IA & Flow</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p class="p-0">首先整理使用者在每個階段需要的資訊。</p>
                                        <img src="../assets/TravelMaker/TravelMaker_IA.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            Information Architecture
                                        </figcaption>
                                        <p class="p-0">再進一步思考版面、資訊配置，並以手繪方式溝通。</p>
                                        <img src="../assets/TravelMaker/TravelMaker_Sketch.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            Sketch
                                        </figcaption>
                                        <p class="p-0">得出共識後排出 low-fi wireflow 作為雛形。</p>
                                        <img src="../assets/TravelMaker/TravelMaker_Wireflow.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            Wireflow
                                        </figcaption>
                                        <p class="p-0">最終將設計發展為可驗證操作的 Prototype 以進行後續應用。</p>
                                        <img src="../assets/TravelMaker/TravelMaker_Prototype.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            Prototype
                                        </figcaption>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-md-5 col-lg-6 card-use">
                        <!-- Card-1 -->
                        <div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#UXPopup">
                            <img src="../assets/TravelMaker/icon/Use.png" class="p-3 card-img-top" style="max-width: 150px; max-height: 150px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">經過驗證的操作方式</h5>
                                <p class="card-text text-center">透過不斷的迭代驗證，我們找出最直覺的操作方式，減少旅人的阻礙，不必費力學習困難的操作流程。</p>
                            </div>
                        </div>
                        <!-- Popup-1 -->
                        <div class="modal fade" id="UXPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4>A/B Test</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p class="p-0">團隊在規劃替代行程功能時，遭遇到一個挑戰：<strong>「如何讓使用者在旅遊的當下決定是否重新規劃行程？」</strong></p>
                                        <p>為此，我帶領大家做了 A/B testing ，分別將兩組不同的版面交給不同的使用者，並且觀察他們的行動。</p>
                                        <div class="row">
                                            <div class="col-6">
                                                <img src="../assets/TravelMaker/TravelMaker_ABTest_A.png" class="img-fluid" alt="">
                                                <figcaption class="blockquote-footer text-center pt-3">
                                                    延伸按鈕方式
                                                </figcaption>
                                            </div>
                                            <div class="col-6">
                                                <img src="../assets/TravelMaker/TravelMaker_ABTest_B.png" class="img-fluid" alt="">
                                                <figcaption class="blockquote-footer text-center pt-3">
                                                    跳出視窗方式
                                                </figcaption>
                                            </div>
                                        </div>
                                        <p>我們注意到，pop up 的組別雖然會更快的點擊「不重新規劃」的按鈕，但是使用者的回饋表示跳出的視窗有一點干擾，並且只會想「快點關掉它」，因此團隊決定使用延伸按鈕的作法。</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-md-5 col-lg-6 card-see">
                        <!-- Card-1 -->
                        <div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#StylePopup">
                            <img src="../assets/TravelMaker/icon/Style.png" class="p-3 card-img-top" style="max-width: 150px; max-height: 150px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">統一簡潔的視覺風格</h5>
                                <p class="card-text text-center">能夠在各種旅遊情境下清楚顯示的視覺設計，不再被複雜花俏的風格樣式弄得眼花撩亂。</p>
                            </div>
                        </div>
                        <!-- Popup-1 -->
                        <div class="modal fade" id="StylePopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4>StyleGuide</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p class="p-0">根據目標族群的喜好以及 Apple 的 Human Interface Guideline 建立專屬於 TravelMaker 的 Style Guide.</p>
                                        <img src="../assets/TravelMaker/TravelMaker_Styleguide.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            Style Guide
                                        </figcaption>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 col-md-5 col-lg-6 card-test">
                        <!-- Card-1 -->
                        <div class="card align-items-center p-2" type="button" data-bs-toggle="modal" data-bs-target="#NextPopup">
                            <img src="../assets/TravelMaker/icon/Test.png" class="p-3 card-img-top" style="max-width: 150px; max-height: 150px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">傾聽意見不斷改進</h5>
                                <p class="card-text text-center">旅遊管家持續搜集使用者的意見與回饋並進行修正，同時積極規劃後續發展，帶給旅人更方便的服務。</p>
                            </div>
                        </div>
                        <!-- Popup-1 -->
                        <div class="modal fade" id="NextPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4>Usability Test & Next Steps</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p class="p-0">後續規劃進行易用性測試以持續優化使用體驗。</p>
                                        <img src="../assets/TravelMaker/TravelMaker_UsabilityTest.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            Usability Test Plan
                                        </figcaption>
                                        <p class="p-0">持續優化既有產品，並納入更多功能以提供更全面的旅遊助理服務。</p>
                                        <img src="../assets/TravelMaker/TravelMaker_Nextsteps.png" class="img-fluid" alt="">
                                        <figcaption class="blockquote-footer text-center pt-3">
                                            可發展功能與優化項目
                                        </figcaption>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-3 d-none d-lg-block"></div>
            <div id="item-7" class="col-12">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-5 col-lg-3 align-content-center pb-5">
                        <h4 class="text-center fw-bold text-white pt-5">Role</h4>
                        <p class="text-center text-white mb-0">Project Manage</p>
                        <p class="text-center text-white mb-0">Research</p>
                        <p class="text-center text-white mb-0">Interaction Design</p>
                        <p class="text-center text-white mb-0">Information Architecture</p>
                        <h4 class="text-center fw-bold text-white pt-3">Duration</h4>
                        <p class="text-center text-white mb-0">Fall 2021</p>
                    </div>
                    <div class="col-6 col-md-5 col-lg-3 mt-md-5 pt-2 pb-5 d-grid gap-1">
                        <div class="text-center">
                            <img src="../assets/TravelMaker/Travelmaker_Logo.svg" class="img-fluid" alt="">
                        </div>
                        <a href="https://www.figma.com/proto/prrQCaOrDpzMd3DmCon6VX/Travel-Maker?kind=&node-id=364%3A3631&page-id=364%3A366&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=364%3A3631" class="btn btn-cta mt-4 mb-2 fs-5 fw-bold" type="button">Try TravelMaker</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
        #sideNav {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            padding: 20px;
            opacity: 0;
            transition:opacity 0.5s;
        }
        .btn-bts{
            color:white;
            background-color: #89B9CD;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
            border: none;
        }
        .btn-bts:hover{
            transform: scale(99%);
            box-shadow: none;
            background-color: #FFA7A7;
        }
        .btn-cta{
            color:white;
            background-color: #FFA7A7;
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
            border: none;
        }
        .btn-cta:hover{
            color:#89B9CD;
            transform: scale(99%);
            box-shadow: none;
            background-color: white;
        }
        .nav-link {
            font-size: 1rem;
            font-weight: 400;
            padding: 3px 30px 3px 30px;
            color:#D9D9D9;
            border-radius: 5px;
        }
        .nav-link:hover{
            box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
            background-color: white;
            color: #8D8D8D;
            font-weight: 400;

        }
        .cursorDefault{
            cursor: default;
            pointer-events: none;
        }
        .card:hover{
            transform: scale(98%);
            box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);
            transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
        }
        #item-7{
            background-color: #89B9CD;
        }
        .border-start{
            border-left:#89B9CD dashed medium !important;
        
        }
</style>

<script setup>
import { ref , onMounted } from 'vue';
        import { onBeforeRouteLeave } from 'vue-router';

        let sidenavLink;
        let banner;
        let sidenavContainer;

        onMounted(()=>{
            sidenavContainer = document.querySelector('#sideNav');
            sidenavLink = sidenavContainer.getElementsByClassName("nav-link");
            banner = document.querySelector('.banner');
            // 監聽視窗滾動事件
            window.addEventListener('scroll', ScrollListener);

        })

        function ScrollListener(){
            const bannerPosition = banner.getBoundingClientRect().bottom;
                if (bannerPosition <= 150) {
                    sidenavContainer.style.opacity = 1;
                    for(let i = 0; i<sidenavLink.length; i++){
                        sidenavLink[i].classList.remove("cursorDefault");
                    }
                }
                else {
                    sidenavContainer.style.opacity = 0;
                    for(let i = 0; i<sidenavLink.length; i++){
                        sidenavLink[i].classList.add("cursorDefault");
                    }
                }
        }


        onBeforeRouteLeave((to, from, next) => {
            // 移除 window 的事件監聽器
            window.removeEventListener('scroll', ScrollListener);
            console.log("remove");
            next(); // 繼續導航
        });
</script>