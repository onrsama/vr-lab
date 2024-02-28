<script setup>
import { Link, Head, router } from '@inertiajs/vue3';

defineProps({
    message: String,
    contact: String
})
</script>

<template>
    
<Head>
    <title>Beranda</title>
    <meta content="MulaiKarir"
            type="title"
            head-key="title"/>
    <meta type="description"
            content="Saatnya mulai karirmu, peluang kerja terbaik ada disini. Jelajahi ribuan lowongan kerja yang tepat untuk profesimu"
            head-key="description" />
    <!-- <meta property="og:image" content="/assets/imgs/template/favicon.png" /> -->
</Head>
<!-- <h1>TIBA</h1>
<p class="text-3xl font-bold underline">{{ message }}</p>
<p>{{ contact }}</p> -->

<!-- NAVBAR /////////////////// -->
<!-- <nav id="nav" class="fixed right-0 left-0 top-0 h-14 flex items-center md:justify-between px-10 justify-between text-black"> 
    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="w-10 hidden">
    <div class="text-sm  md:flex hidden font-semibold ml-[10%]">
        <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">サービス</a>
        <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">制作フロー</a>
        <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">料金</a>
        <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">会社案内</a>
    </div> 
    <div class="ml-3">
        <button class="md:block hidden rounded-[5px] py-[10px] px-6 font-bold">Log-in</button>
    </div>
    <button onclick="navrespons()" class="md:hidden flex border-black p-2 mr-3 "><i class="fa fa-bars text-[#381546]"></i></button>
</nav> -->
<div class="md:hidden">
    <div id="navres" class="fixed p-2 gap-y-2 flex flex-col right-0 left-0 bottom-0 top-11 text-lg border text-center backdrop-blur-sm hidden">
        <a href="#" class="">Product</a>
        <a href="#" class="">Features</a>
        <a href="#" class="">Marketplace</a>
        <a href="#" class="">Company</a>
        <hr>
        <a href="#" class="">Log-In</a>
    </div>
</div>
<!-- NAVBAR END /////////////////// -->

<!-- MAIN ///////////////////// -->
<div class="grid md:grid-cols-2 md:grid-rows-1 md:h-screen h-[140vh] gap-2 grid-rows-2">
    <nav id="nav" class="absolute right-0 left-0 top-0 h-14 flex items-center md:justify-between px-10 justify-between text-black"> 
        <img src="imgs/sample-logo.png" alt="" class="w-10 hidden">
        <div class="text-sm  md:flex hidden font-semibold ml-[10%]">
            <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">サービス</a>
            <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">制作フロー</a>
            <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">料金</a>
            <a href="#" class="mx-5 hover:underline underline-offset-8 decoration-2 hover:text-[#4f43e5]">会社案内</a>
        </div> 
        <!-- <div class="ml-3">
            <button class="md:block hidden rounded-[5px] py-[10px] px-6 font-bold">Log-in</button>
        </div> -->
        <button onclick="navrespons()" class="md:hidden flex border-black p-2 mr-3 "><i class="fa fa-bars text-[#381546]"></i></button>
    </nav>

    <!-- Keterangan -->
    <div class="relative flex flex-col justify-center md:p-20 p-5">
        <div id="call-section" class="absolute -top-40 -left-40 -z-10"></div>
        <div id="call-section-2" class="absolute -z-10 -bottom-[540px] -right-[250px]"></div>

        <img src="imgs/sample-logo.png" alt="" class="md:w-[6rem] w-[6rem]">
        <br>
        <div>
            <p class="rounded-full border md:inline hidden p-2 px-4">
                <span class="text-sm">ローコストCG制作サービス <span class="text-orange-500 font-semibold ml-3"><a href="#">料金詳細 ></a></span></span>
            </p>
        </div>
        <h1 class="md:text-5xl text-4xl font-bold mt-[3rem] mb-4">貴社のCGパース制作 <br>パートナー</h1>
        <p class="md:text-xl text-lg mt-6 text-gray-600">コンピューター上に実寸の3Dモデリングデータを配置し、仕上げ情報の反映、ライティングの反映、カメラ設定を入力し、演算結果とし視覚化します。</p>
        <div class="mt-10">
            <button class="bg-teal-500  rounded-md py-[10px] px-[14px]  border border-slate-400 text-white font-semibold">スタート</button>
            <button class="ml-6 p-2 font-semibold">もっと見る <span>→</span></button>
        </div>
    </div>
    <!-- Gambar -->
    <div class="overflow-hidden md:h-full h-[60%] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80" alt="" class="absk">
    </div>
</div>
<!-- ///////////////////// -->

<div class="bg-sky-700 border-b-2 border-slate-100">
</div>


<!-- ================================= -->
<!-- CG-SECTION -->
<!-- ================================= -->
<div class="container mx-auto bg-white">
    <!-- Keterangan -->
    <div class="flex flex-col md:p-20 p-5">
        <h3 id="cg-title" class="md:text-5xl text-5xl font-bold mt-[1rem] text-white py-5 px-10">CGパース</h3>
        <img src="imgs/2-1.jpg" alt="" class="w-full border-t-2 border-sky-500"> 
        <!-- images & need -->
        <!-- Images -->
        
        <p class="md:text-xl text-lg mt-6 text-gray-600">コンピューター上に実寸の3Dモデリングデータを配置し、仕上げ情報の反映(色・おうとつ・反射率・拡散率・屈折率)、ライティングの反映(配灯・光の強度影・ボケ方)、カメラ設定(シャッタースピード・視点の高さ・被写界深度)を入力し、演算結果とし視覚化します。</p>

        <div>
            <h4 class="text-xl mt-6 mb-3 font-semibold">制作事例</h4>
            <div class="grid md:grid-rows-2 md:grid-cols-4 -ml-4">
                <img src="imgs/2-2.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-3.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-4.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-5.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-6.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-9.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-7.jpg" alt="" class="px-4 mb-6">
                <img src="imgs/2-8.jpg" alt="" class="px-4 mb-6">
            </div>
            <div class="-mt-4"><a href="#" class="underline">See more &rarr;</a></div>
            <!-- Images end -->

            <!-- need -->
            <h4 class="text-xl font-semibold mt-6 mb-4">詳細</h4>                
                <div class="md:grid grid-cols-2 md:ml-[9%] text-sm mt-6">
                    <div class="md:text-right md:mr-72">制作内容 ：</div>
                    <div class="md:-ml-60 w-[100%]">外観または内観CGパース1カット（120㎡まで）、A2サイズ印刷レベルの高画質対応</div>
                    <div class="md:text-right md:mr-72">納品形態 ：</div>
                    <div class="md:-ml-60 w-[100%] mt-2">5 .jpgファイル納品</div>
                    <div class="md:text-right md:mr-72">必要資料 ：</div>
                    <div class="md:-ml-60 w-[100%] mt-2">平面図、立面図、配置図、仕上表、Google Map で検索できる現地住所</div>
                    <div class="md:text-right md:mr-72">納期 ：</div>
                    <div class="md:-ml-60 w-[100%] mt-2">5 営業日以内（但し、制作チェックの確認期間は除きます）</div>
                    <div class="md:text-right md:mr-72"></div>
                    <div class="md:-ml-60 w-[100%] mt-2">※初回のご依頼はヒアリングや制作の流れを説明しながら進めますので 10 営業日以内となります</div>
                </div>
            <!-- need end  -->
            <!-- images & need end -->
        </div>
    </div>
</div>
<!-- ================================= -->
<!-- CG-SECTION-END -->
<!-- ================================= -->



<!-- ================================= -->
<!-- HOMESTAGING-SECTION -->
<!-- ================================= -->
<div class="container mx-auto bg-white">
    <!-- Keterangan -->
    <div class="flex flex-col md:p-20 p-5">
        <h3 id="homestaging-title" class="md:text-5xl text-4xl font-bold mt-[1rem] text-white py-5 px-10">HOMESTAGING</h3>
        <img src="imgs/sect2/4-1_before.jpg" alt="" class="w-full border-t-2 border-sky-500"> 
        <!-- images & need -->
        <!-- images -->
        <h4 class="text-xl font-semibold mt-6 mb-4">詳細</h4>
        <div class="grid md:grid-cols-4 -ml-4">
            <div class="flex flex-col items-center">
                <img src="imgs/2-2.jpg" alt="" class="px-4 mb-6">
                <span>①ナチュラル</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="imgs/2-3.jpg" alt="" class="px-4 mb-6">
                <span>②モダン</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="imgs/2-4.jpg" alt="" class="px-4 mb-6">
                <span>③シンプル</span>
            </div>
            <div class="flex flex-col items-center">
                <img src="imgs/2-5.jpg" alt="" class="px-4 mb-6">
                <span>④ビンテージ</span>
            </div>
        </div>
        <!-- images-end -->
        <!-- needs -->                
        <div class="md:grid grid-cols-2 md:ml-[9%] text-sm mt-6">
            <div class="md:text-right md:mr-72">制作内容 ：</div>
            <div class="md:-ml-60 w-[100%]">写真合成イメージ製作</div>
            <div class="md:text-right md:mr-72">納品形態 ：</div>
            <div class="md:-ml-60 w-[100%] mt-2">5 .jpgファイル納品。スライダー機能搭載の場合はURL納品となります。</div>
            <div class="md:text-right md:mr-72">必要資料 ：</div>
            <div class="md:-ml-60 w-[100%] mt-2">内観写真、インテリアスタイルの指示、家具配置の資料（写真や平面図に大体の家具の配置を記載した資料。手描きで構いません）</div>
            <div class="md:text-right md:mr-72">納期 ：</div>
            <div class="md:-ml-60 w-[100%] mt-2">5 営業日以内（但し、制作チェックの確認期間は除きます）</div>
            <div class="md:text-right md:mr-72"></div>
            <div class="md:-ml-60 w-[100%] mt-2 text-xs">※初回のご依頼はヒアリングや制作の流れを説明しながら進めますので１０営業日以内となります</div>
            <div class="md:text-right md:mr-72">注意事項：</div>
            <div class="md:-ml-60 w-[100%] mt-2">室内の家具は弊社お任せとなり家具の指定は不可となります。 CGホームステージングは基本的に修正は1回の提出となり、基本的に調整は行いません（微調整は承ります）。</div>
            <div class="md:text-right md:mr-72"></div>
            <div class="md:-ml-60 w-[100%] mt-2">スライダー機能搭載（URL納品）の場合、プログラムサーバー上での維持保守費用（月額30,000円）が別途必要になります。（データ量上限100ギガまで）</div>
        </div>
    </div>
        <!-- need end  -->
</div>
<!-- ================================= -->
<!-- HOMESTAGING-SECTION-END -->
<!-- ================================= -->

</template>

<script>
    function navrespons() {
    var navres = document.getElementById('navres');
    navres.classList.toggle('hidden' );
}
</script>

<style>
#call-section, #call-section-2 {
    width: 600px;
    height: 600px;
    border-radius: 600px;
    background: radial-gradient(77.95% 77.95% at 74.66% 58.07%, rgba(255, 254, 220, 0.8) 0%, rgba(255, 255, 255, 0.152) 62.28%, rgba(255, 255, 255, 0) 100%), radial-gradient(89.67% 70.39% at 93.75% 92.16%, #29C2D7 0%, rgba(144, 160, 215, 0.49) 52.46%, rgba(255, 156, 156, 0) 100%), radial-gradient(68.86% 68.86% at 94.55% 1.7%, #FADC90 0%, rgba(250, 220, 144, 0) 100%), linear-gradient(130.87deg, rgba(245, 115, 122, 0.78) 3.47%, rgba(245, 115, 122, 0) 77.25%);
    background-blend-mode: overlay,normal,normal,normal,normal,normal;
    filter: blur(50px);
}

#call-section-2 {
    /* width: 400px;
    height: 400px;
    border-radius: 400px;
    background: radial-gradient(105.68% 45.69% at 92.95% 50%, rgba(105, 244, 253, 0.5) 0%, rgba(160, 255, 244, 0.095) 53.91%, rgba(254, 216, 255, 0) 100%), radial-gradient(103.18% 103.18% at 90.11% 102.39%, #C9FFF2 0%, rgba(230, 255, 250, 0) 100%), radial-gradient(90.45% 90.45% at 87.84% 9.55%, #FFD2F5 0%, rgba(254, 219, 246, 0) 100%), linear-gradient(135.66deg, rgba(203, 185, 255, 0.8) 14.89%, rgba(216, 202, 254, 0) 74.33%);
    background-blend-mode: normal,normal,normal,normal,normal,normal;
    filter: blur(50px); */
}

#cg-title, #homestaging-title {
    background-image: url(imgs/background/cg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -600px;
}

#homestaging-title {
    background-position-y: -50px;
}
</style>