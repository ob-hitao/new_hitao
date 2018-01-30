<template>
    <div class="shopping">
        <v-search></v-search>
        <div class="shopping__container">
            <div class="menu">
                <ul>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                    <li class="menu__item">为您推荐</li>
                </ul>
            </div>
            <div class="lists">
                <figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure>
                <figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure><figure class="lists__item">
                    <img class="lists__img" src="./Shopping_dress.jpg" />
                    <figcaption class="lists__type">
                        裙子
                    </figcaption>
                </figure>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/footer/footer';
import vSearch from '@/components/search/search';

export default
{
    components:
    {
        vFooter,
        vSearch
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.shopping
{

    &__container
    {
        .menu
        {
            position: absolute;
            top: 44px;
            bottom: 50px;
            left: 0;
            width: 90px;
            overflow: auto;

            ul
            {
                padding: 0;
                margin: 0;
            }
            &__item
            {
                width: 100%;
                height: 44px;
                padding: 0;
                list-style: none;
                line-height: 44px;
                text-align: center;
                font-size: 15px;
            }
        }
        .lists
        {
            position: absolute;
            top: 44px;
            right: 0;
            bottom: 50px;
            display: flex;
            flex-flow: wrap;
            align-content: flex-start;
            width: calc(100% - 90px);
            overflow: auto;
            background: #fff;

            &__item
            {
                flex: 0 1 33.3%;
                padding: 15px 0;
                height: auto;
                margin: 0;
                text-align: center;
            }
            &__img
            {
                width: 65px;
                height: 65px;
            }
            &__type
            {
                font-size: 13px;
                color: #666;
            }
        }
    }
}
</style>