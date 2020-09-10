<template>
  <div>
    <div v-show="index == '管理组'">
      <div class="title">管理组</div>
      <div class="first">{{ part[0] }}</div>
      <div class="second">{{ department[0].introduction }}</div>
      <div class="first">{{ part[1] }}</div>
      <div class="second">
        <a
          class="people"
          href=""
          v-bind:key="index"
          v-for="(person, index) in department[0].manager"
          v-on:click.prevent="dialog(person)"
        >
          {{ person }}
        </a>
        <el-dialog
          title="个人信息"
          :visible.sync="zhouYunDialog"
          append-to-body="true"
          center="true"
          width="30%"
        >
          <section>
            <img
              src="../assets/group_pic/zhy.jpg"
              alt="周云"
              height="100"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p style="">周云</p>
              <p>周云，男，软工1804班。</p>
              <p>精通多门编程语言，算法功力深厚。</p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="zouYanDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/zy.jpg"
              alt="邹研"
              height="100"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>邹研</p>
              <p>
                邹研,男，信管1801班。
              </p>
              <p>
                熟悉Java、Python等多门高级语言。
              </p>
            </div>
          </section>
        </el-dialog>
      </div>
      <div class="first">{{ part[2] }}</div>
      <div class="second">
        <a
          class="people"
          href=""
          v-bind:key="index"
          v-for="(person, index) in department[0].member"
          v-on:click.prevent="dialog(person)"
        >
          {{ person }}
        </a>
        <el-dialog
          title="个人信息"
          :visible.sync="liaoYuHaoDialog"
          append-to-body="true"
          center="true"
          width="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="廖宇豪"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>廖宇豪</p>
              <p>
                廖宇豪,男,班。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="xiaoHaoYuDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/xihy.jpg"
              alt="肖浩宇"
              height="100"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>肖浩宇</p>
              <p>
                肖浩宇,男,大数据1902班.
              </p>
              <p>
                熟悉C/C++。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="dingYiNingDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="丁亦宁"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>丁亦宁</p>
              <p>
                丁亦宁,女,班。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="xingHangYuDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/xhy.jpg"
              alt="幸航宇"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>幸航宇</p>
              <p>
                幸航宇,女,班。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="liuYiChiDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/lyc.jpg"
              alt="刘奕池"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>刘奕池</p>
              <p>
                刘奕池,女,班。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="zhangYinBinDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="张银滨"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>张银滨</p>
              <p>
                张银滨,男,班。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="shaoFeiLongDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="邵飞龙"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>邵飞龙</p>
              <p>
                邵飞龙,男,班。
              </p>
            </div>
          </section>
        </el-dialog>
      </div>
    </div>

    <div v-show="index == '运行组'">
      <div class="title">运行组</div>
      <div class="first">{{ part[0] }}</div>
      <div class="second">{{ department[1].introduction }}</div>
      <div class="first">{{ part[1] }}</div>
      <div class="second">
        <a
          class="people"
          href=""
          v-bind:key="index"
          v-for="(person, index) in department[1].manager"
          v-on:click.prevent="dialog(person)"
        >
          {{ person }}
        </a>
        <el-dialog
          title="个人信息"
          :visible.sync="yangYuQianDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/yyq.jpg"
              alt="杨宇千"
              height="100"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>杨宇千</p>
              <p>
                杨宇千,男,计算机1901班。
              </p>
              <p>
                全栈工程师，万能大佬。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="weiJinMingDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="魏锦明"
              height="150"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>魏锦明</p>
              <p>
                魏锦明,男。大数据1801班。
              </p>
              <p>
                平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
              <p>
                性格内向,不善外交。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="liuJiaWangDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/ljw.jpg"
              alt="柳家望"
              height="120"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>柳家望</p>
              <p>
                柳家望,男，信息与计算科学1802班。
              </p>
              <p>
                深耕Python,精通爬虫，数据挖掘，可视化，机器学习等。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="zhouJiaPengDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/zjp.jpg"
              alt="周佳鹏"
              height="120"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>周佳鹏</p>
              <p>
                周佳鹏,男,信息与计算科学1802班。
              </p>
              <p>
                精通C++,算法功力极其深厚。英语还很牛。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="huYiDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/hy.jpg"
              alt="胡奕"
              height="120"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>胡奕</p>
              <p>
                胡奕,男,软工1804班。
              </p>
              <p>
                深耕Java,精通各种算法,各种比赛都有涉猎参加。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="zhuZhongKunDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/zzk.jpg"
              alt="朱仲坤"
              height="120"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>朱仲坤</p>
              <p>
                朱仲坤,男,大数据1803班。
              </p>
              <p>
                精通C、Python、Java等语言,语言功力深厚。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="zuoZhiXiangDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/zzx.jpg"
              alt="左志祥"
              height="120"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>左志祥</p>
              <p>
                左志祥,男,软工1804班。
              </p>
              <p>
                精通C/C++, Java等,语言算法功力都很深厚。
              </p>
            </div>
          </section>
        </el-dialog>
      </div>
      <div class="first">{{ part[2] }}</div>
      <div class="second">
        <a
          class="people"
          href=""
          v-bind:key="index"
          v-for="(person, index) in department[1].member"
          v-on:click.prevent="dialog(person)"
        >
          {{ person }}
        </a>
        <el-dialog
          title="个人信息"
          :visible.sync="yuYanDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="余言"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>余言</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="wuHaoNanDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="吴浩楠"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>吴浩楠</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="liPanFengDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="李攀峰"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>李攀峰</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="gouShuYangDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="苟书洋"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>苟书洋</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="fengZhiQiangDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="丰志强"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>丰志强</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
      </div>
    </div>

    <div v-show="index == '宣传组'">
      <div class="title">宣传组</div>
      <div class="first">{{ part[0] }}</div>
      <div class="second">{{ department[2].introduction }}</div>
      <div class="first">{{ part[1] }}</div>
      <div class="second">
        <a
          class="people"
          href=""
          v-bind:key="index"
          v-for="(person, index) in department[2].manager"
          v-on:click.prevent="dialog(person)"
        >
          {{ person }}
        </a>
        <el-dialog
          title="个人信息"
          :visible.sync="liuDeDialog"
          append-to-body="true"
          center="true"
          width="50%"
        >
          <section>
            <img
              src="../assets/group_pic/ld.jpg"
              alt="刘德"
              height="120"
              width="100"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>刘德</p>
              <p>
                刘德,男,软工1804班。
              </p>
              <p>
                算法协会发起人，精通Java、C++,前端知识。算法功力很强。
              </p>
            </div>
          </section>
        </el-dialog>
      </div>
      <div class="first">{{ part[2] }}</div>
      <div class="second">
        <a
          class="people"
          href=""
          v-bind:key="index"
          v-for="(person, index) in department[2].member"
          v-on:click.prevent="dialog(person)"
        >
          {{ person }}
        </a>
        <el-dialog
          title="个人信息"
          :visible.sync="zhangXiangXuanDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="张翔轩"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>张翔轩</p>
              <p>
                张翔轩,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="yuanFeiDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="袁菲"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>袁菲</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="shaoJiaLinDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="邵嘉林"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>邵嘉林</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
        <el-dialog
          title="个人信息"
          :visible.sync="huangXinXinDialog"
          append-to-body="true"
          center="true"
          width="75%"
          height="75%"
        >
          <section>
            <img
              src="../assets/group_pic/wjm.jpg"
              alt="黄鑫鑫"
              height="80"
              width="80"
              style="float: left;"
            />
            <div style="text-indent:2em">
              <p>黄鑫鑫</p>
              <p>
                邹研,男，信管1801班。平日里爱好京剧、相声。略懂C/C++、Python、Java。
              </p>
            </div>
          </section>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupDetail",
  props: {
    index: String
  },

  data() {
    return {
      zhouYunDialog: false,
      zouYanDialog: false,
      zhangXiangXuanDialog: false,
      yuanFeiDialog: false,
      shaoJiaLinDialog: false,
      huangXinXinDialog: false,
      yangYuQianDialog: false,
      weiJinMingDialog: false,
      liuJiaWangDialog: false,
      zhouJiaPengDialog: false,
      zhuZhongKunDialog: false,
      huYiDialog: false,
      zuoZhiXiangDialog: false,
      yuYanDialog: false,
      wuHaoNanDialog: false,
      liPanFengDialog: false,
      gouShuYangDialog: false,
      fengZhiQiangDialog: false,
      liuDeDialog: false,
      liaoYuHaoDialog: false,
      xiaoHaoYuDialog: false,
      dingYiNingDialog: false,
      xingHangYuDialog: false,
      liuYiChiDialog: false,
      zhangYinBinDialog: false,
      shaoFeiLongDialog: false,

      part: ["部门介绍", "负责人", "成员"],

      department: [
        {
          introduction: "管理组的日常主要任务是......",
          manager: ["周云", "邹研"],
          member: [
            "廖宇豪",
            "肖浩宇",
            "丁亦宁",
            "幸航宇",
            "刘奕池",
            "张银滨",
            "邵飞龙"
          ]
        },
        {
          introduction: "运行组的日常主要任务是......",
          manager: [
            "杨宇千",
            "魏锦明",
            "柳家望",
            "周佳鹏",
            "朱仲坤",
            "胡奕",
            "左志祥"
          ],
          member: ["余言", "吴浩楠", "李攀峰", "苟书洋", "丰志强"]
        },
        {
          introduction: "宣传组的日常主要任务是......",
          manager: ["刘德"],
          member: ["张翔轩", "袁菲", "邵嘉林", "黄鑫鑫"]
        }
      ]
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    dialog(p) {
      // eslint-disable-next-line no-empty
      if (p == "周云") {
        this.zhouYunDialog = true;
      }
      if (p == "邹研") {
        this.zouYanDialog = true;
      }
      if (p == "张翔轩") {
        this.zhangXiangXuanDialog = true;
      }
      if (p == "袁菲") {
        this.yuanFeiDialog = true;
      }
      if (p == "邵嘉林") {
        this.shaoJiaLinDialog = true;
      }
      if (p == "黄鑫鑫") {
        this.huangXinXinDialog = true;
      }
      if (p == "杨宇千") {
        this.yangYuQianDialog = true;
      }
      if (p == "魏锦明") {
        this.weiJinMingDialog = true;
      }
      if (p == "柳家望") {
        this.liuJiaWangDialog = true;
      }
      if (p == "周佳鹏") {
        this.zhouJiaPengDialog = true;
      }
      if (p == "朱仲坤") {
        this.zhuZhongKunDialog = true;
      }
      if (p == "胡奕") {
        this.huYiDialog = true;
      }
      if (p == "左志祥") {
        this.zuoZhiXiangDialog = true;
      }
      if (p == "余言") {
        this.yuYanDialog = true;
      }
      if (p == "吴浩楠") {
        this.wuHaoNanDialog = true;
      }
      if (p == "李攀峰") {
        this.liPanFengDialog = true;
      }
      if (p == "苟书洋") {
        this.gouShuYangDialog = true;
      }
      if (p == "丰志强") {
        this.fengZhiQiangDialog = true;
      }
      if (p == "刘德") {
        this.liuDeDialog = true;
      }
      if (p == "廖宇豪") {
        this.liaoYuHaoDialog = true;
      }
      if (p == "肖浩宇") {
        this.xiaoHaoYuDialog = true;
      }
      if (p == "丁亦宁") {
        this.dingYiNingDialog = true;
      }
      if (p == "幸航宇") {
        this.xingHangYuDialog = true;
      }
      if (p == "刘奕池") {
        this.liuYiChiDialog = true;
      }
      if (p == "张银滨") {
        this.zhangYinBinDialog = true;
      }
      if (p == "邵飞龙") {
        this.shaoFeiLongDialog = true;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.title {
  font-size: 40px;
}

.people {
  height: 32px;
  line-height: 32px;
  margin: 6px 10px 6px 0;
  display: inline-block;
  width: 92px;
  color: #333;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  overflow: hidden;
}
.first {
  border: 1px solid #ebebeb;
  font-size: 18px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.second {
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ebebeb;
  margin-bottom: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.pos {
  margin: auto;
}

.pos table {
  margin: auto;
}
</style>
