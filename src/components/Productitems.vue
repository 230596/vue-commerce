<template>
    <div>
         <!-- Women Banner Section Begin -->
    <section class="women-banner spad" id="productcart">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <carousel class="product-slider" :items="3" :nav="false" :autoplay="true" :dots="false">
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/mickey12.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><router-link to="/product">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Bags</div>
                                <a href="#">
                                    <h5>Mickey Bags Humm</h5>
                                </a>
                                <div class="product-price">
                                    $15.00
                                    <span>$55.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-2.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><router-link to="/product">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Sweater</div>
                                <a href="#">
                                    <h5>Guangzhou Sweater Long</h5>
                                </a>
                                <div class="product-price">
                                    $130.00
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-3.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><router-link to="/product">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Towel</div>
                                <a href="#">
                                    <h5>Pure Apple</h5>
                                </a>
                                <div class="product-price">
                                    $78.00
                                </div>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/women-4.jpg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><router-link to="/product">+ Quick View</router-link></li>
                                    <li class="w-icon">
                                        <a href="#"><i class="fa fa-random"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Bags</div>
                                <a href="#">
                                    <h5>Converse Beauty Little</h5>
                                </a>
                                <div class="product-price">
                                    $55.00
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
    name: 'Productitems',
    components:{
        carousel
    }  
}
</script>

<style scoped>
.product-item{
    margin-right:25px;
}
</style>