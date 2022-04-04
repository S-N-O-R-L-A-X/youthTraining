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
              <el-radio v-model="scope.row.rate" :label="1">√</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="有时">
            <template slot-scope="scope">
              <el-radio v-model="scope.row.rate" :label="2">√</el-radio>
            </template>
          </el-table-column>
          <el-table-column label="从不">
            <template slot-scope="scope">
              <el-radio v-model="scope.row.rate" :label="3">√</el-radio>
            </template>
          </el-table-column>
        <!-- </el-radio-group> -->
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { getExam } from "@/api/exam.js";
export default {
  data() {
    return {
      instruction: "wait",
      tableData: [
        {
          question: "2016-05-02",
          rate: 2,
        },
        {
          question: "2016-05-04",
          rate: 3,
        },
        {
          question: "2016-05-01",
          rate: 3,
        },
        {
          question: "2016-05-03",
          rate: 3,

        },
      ],
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
  },
  created() {
    // this.getQuestion();
  },
};
</script>

