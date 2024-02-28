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
<div id="call-section" class="grid md:grid-cols-2 md:grid-rows-1 md:h-screen h-[140vh] gap-2 grid-rows-2">
    <nav id="nav" class="absolute right-0 left-0 top-0 h-14 flex items-center md:justify-between px-10 justify-between text-black"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Simple_Shop_logo.png" alt="" class="w-10 hidden">
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
    <div class="flex flex-col justify-center md:p-20 p-5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Simple_Shop_logo.png" alt="" class="md:w-[8rem] w-[8rem]">
        <br>
        <div>
            <p class="rounded-full border md:inline hidden p-2 px-4">
                <span class="text-sm">ローコストCG制作サービス <span class="text-orange-500 font-semibold ml-3"><a href="#">料金詳細 ></a></span></span>
            </p>
        </div>
        <h1 class="md:text-5xl text-4xl font-bold mt-[3rem] mb-4">貴社の <br> CG制作パートナー</h1>
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

<div class="bg-slate-100">
    <br><br><br><br><br><br><br><br><br>
</div>


<!-- MAIN ///// -->
<div class="container mx-auto px-24">
    <!-- Keterangan -->
    <div class="flex flex-col md:p-20 p-5">
        <h3 class="md:text-5xl text-4xl font-bold mt-[1rem] text-orange-500">CGパース</h3>
        <p class="md:text-xl text-lg mt-6 text-gray-600">コンピューター上に実寸の3Dモデリングデータを配置し、仕上げ情報の反映(色・おうとつ・反射率・拡散率・屈折率)、ライティングの反映(配灯・光の強度影・ボケ方)、カメラ設定(シャッタースピード・視点の高さ・被写界深度)を入力し、演算結果とし視覚化します。</p>
        <img src="imgs/2-1.jpg" alt="" class="w-full mt-10"> 
        <!-- images & need -->
        <!-- Images -->
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
            <h4 class="text-xl font-semibold mt-6 mb-4">制作事例</h4>
            <div class="md:flex text-sm">
                <p class="px-6 w-32 ">制作内容 :</p>
                <p class="px-6">外観または内観CGパース1カット（120㎡まで） 、A2サイズ印刷レベルの高画質対応</p>
            </div>
            <div class="md:flex text-sm mt-2">
                <p class="px-6 w-32 ">納品形態 :</p>
                <p class="px-6">.jpgファイル納品</p>
            </div>
            <div class="md:flex text-sm mt-2">
                <p class="px-6 w-32 ">必要資料 :</p>
                <p class="px-6">外観 + 内観、住宅 1 棟（120 ㎡ まで）の CG 動画、2～３分程度</p>
            </div>
            <div class="md:flex text-sm mt-2">
                <p class="px-6 w-32 ">納期：</p>
                <p class="px-6">5 営業日以内（但し、制作チェックの確認期間は除きます）</p>
            </div>
            <div class="md:flex text-sm mt-2">
                <p class="px-6 w-32"></p>
                <p class="px-6 text-xs">※初回のご依頼はヒアリングや制作の流れを説明しながら進めますので 10 営業日以内となります</p>
            </div>
            <!-- need end  -->
            <!-- images & need end -->
        </div>
    </div>
</div>

<!-- MAIN END //// -->

</template>

<script>
    function navrespons() {
    var navres = document.getElementById('navres');
    navres.classList.toggle('hidden' );
}
</script>

<style>
#call-section {
    /* background: radial-gradient(77.95% 77.95% at 74.66% 58.07%, rgba(255, 254, 220, 0.8) 0%, rgba(255, 255, 255, 0.152) 62.28%, rgba(255, 255, 255, 0) 100%), radial-gradient(89.67% 70.39% at 93.75% 92.16%, #29C2D7 0%, rgba(144, 160, 215, 0.49) 52.46%, rgba(255, 156, 156, 0) 100%), radial-gradient(68.86% 68.86% at 94.55% 1.7%, #FADC90 0%, rgba(250, 220, 144, 0) 100%), linear-gradient(130.87deg, rgba(245, 115, 122, 0.78) 3.47%, rgba(245, 115, 122, 0) 77.25%); background-blend-mode: overlay,normal,normal,normal,normal,normal; filter: blur(100px); */
}
</style>