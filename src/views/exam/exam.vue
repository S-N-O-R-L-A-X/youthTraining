<template>
  <el-container>
    <el-main>
      <p>{{ instruction }}</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="question" label="问题" width="180">
        </el-table-column>
        <!-- <el-radio-group prop="rate"> -->
          <el-table-column label="总是">
            <template slot-scope="scope">
              <el-radio v-model="scope.row.rate" :label="2" @click.native="choose(scope.$index,2)">√</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="有时">
            <template slot-scope="scope">
              <el-radio v-model="scope.row.rate" :label="1" @click.native="choose(scope.$index,1)">√</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="从不">
            <template slot-scope="scope">
              <el-radio v-model="scope.row.rate" :label="0" @click.native="choose(scope.$index,0)">√</el-radio>
            </template>
          </el-table-column>
        <!-- </el-radio-group> -->
      </el-table>
      <el-button @click="submitResults()" class="submit">提交</el-button>
      <br>
      <el-link href="/">清空测试并回到主页</el-link>
    </el-main>
  </el-container>
</template>

<script>
import { getExam, postResults } from "@/api/exam.js";
export default {
  data() {
    return {
      instruction: "wait",
      tableData: [
        
      ],
      choices:[],
    };
  },
  methods: {
    getQuestion() {
      getExam()
        .then((res) => {
          this.tableData = res.data;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    choose(index,result){
      this.choices[index]=result;
    },
    submitResults() {
      let str="";
      // for(let i=0;i<this.tableData.length;i++){
      //   if(this.choices[i]===undefined){
      //     alert("您的第"+(i+1)+"题未完成！");
      //     return ;
      //   }
      //   str+=this.choices[i];
      // } 
      
      str="1".repeat(49);
      console.log(str);
      postResults({allChoice:str})
        .then((res) => {
          console.log(res);
          this.$router.push({name:"ExamResult",params:{content:res.data}});
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  },
  created() {
    this.getQuestion();
  },
};
</script>

<style scoped>
.submit {
  background-color:#e7e9e8;
  
}
</style>