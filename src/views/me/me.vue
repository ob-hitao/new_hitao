 c   <template>
    <div>
        me
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/footer/footer';

export default
{
    components:
    {
        vFooter
    },
    created()
    {
        console.log(this.$route);
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>