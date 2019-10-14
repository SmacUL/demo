<template>
    
    
    <el-container>
        <el-header></el-header>
        <el-container>
            <el-aside width="250px"><indexLeft></indexLeft></el-aside>
            <el-main>Main</el-main>
            <el-aside width="250px"><indexRight></indexRight></el-aside>
        </el-container>
    </el-container>
</template>

<script>
import indexLeft from '@/components/index/IndexLeft.vue'
import indexRight from '@/components/index/IndexRight.vue'
import indexEdit from '@/components/index/IndexEdit.vue'
// import blogFooter from '@/components/common/BlogFooter.vue'

export default {
  components: { indexLeft, indexRight, indexEdit }
}
</script>