<style>
/* .vi-form .vi-form-item {
  margin-bottom: 20px;
} */
.page-form .vi-form .vi-input {
  width: 270px;
}
</style>

<article class="page-form">

# Form 表单

在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Checkbox、Radio等

## 基础用法
<div class="demo-block">
    <vi-form :model="formPage.form1"
      label-width="80px"
      label-suffix=" :">
      <vi-form-item label="姓名">
        <vi-input v-model="formPage.form1.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="性别">
        <vi-radio v-model="formPage.form1.gender" label="male"></vi-radio>
        <vi-radio v-model="formPage.form1.gender" label="female"></vi-radio>
      </vi-form-item>
      <vi-form-item label="爱好">
        <vi-checkbox-group v-model="formPage.form1.interests">
          <vi-checkbox label="eating"></vi-checkbox>
          <vi-checkbox label="sleeping"></vi-checkbox>
          <vi-checkbox label="working"></vi-checkbox>
        </vi-checkbox-group>
      </vi-form-item>
    </vi-form>
</div>


::: demo
```html
    <vi-form :model="formPage.form1"
      label-width="80px">
      <vi-form-item label="姓名">
        <vi-input v-model="formPage.form1.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="性别">
        <vi-radio v-model="formPage.form1.gender" label="male"></vi-radio>
        <vi-radio v-model="formPage.form1.gender" label="female"></vi-radio>
      </vi-form-item>
      <vi-form-item label="爱好">
        <vi-checkbox-group v-model="formPage.form1.interests">
          <vi-checkbox label="eating"></vi-checkbox>
          <vi-checkbox label="sleeping"></vi-checkbox>
          <vi-checkbox label="working"></vi-checkbox>
        </vi-checkbox-group>
      </vi-form-item>
    </vi-form>

  <script>
  export default {
    data () {
      return {
        formPage: {
          form1: {
            name: '',
            gender: '',
            interests: []
          } 
        }
      };
    }
  }
</script>
```
:::

## 行内表单

<div class="demo-block">
    <vi-form :model="formPage.form2"
      :inline="true">
      <vi-form-item label="姓名">
        <vi-input v-model="formPage.form2.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="学历">
        <vi-input v-model="formPage.form2.education"></vi-input>
      </vi-form-item>
    </vi-form>
</div>

:::demo 
```html
    <vi-form :model="formPage.form2"
      :inline="true">
      <vi-form-item label="姓名">
        <vi-input v-model="formPage.form2.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="学历">
        <vi-input v-model="formPage.form2.education"></vi-input>
      </vi-form-item>
    </vi-form>
<script>
  export default {
    data () {
      return {
        formPage: {
          form2: {
            name: '',
            education: ''
          } 
        }
      };
    }
  }
</script> 
```
:::

## 对齐方式

* 需要配置了label-width 左对齐和右对齐 才能够生效
<div class="demo-block">
    <vi-radio-group v-model="formPage.labelPosition">
      <vi-radio label="left">左对齐</vi-radio>
      <vi-radio label="right">右对齐</vi-radio>
      <vi-radio label="top">顶部对齐</vi-radio>
    </vi-radio-group>
    <div style="margin: 20px;"></div>
    <vi-form :model="formPage.form3"
      label-width="80px"
      :label-position="formPage.labelPosition">
      <vi-form-item label="姓名">
        <vi-input v-model="formPage.form3.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="学历">
        <vi-input v-model="formPage.form3.education"></vi-input>
      </vi-form-item>     
      <vi-form-item label="爱好">
        <vi-input v-model="formPage.form3.interest"></vi-input>
      </vi-form-item>    
    </vi-form>
</div>


:::demo 
```html
    <vi-radio-group v-model="formPage.labelPosition">
      <vi-radio label="left">左对齐</vi-radio>
      <vi-radio label="right">右对齐</vi-radio>
      <vi-radio label="top">顶部对齐</vi-radio>
    </vi-radio-group>
    <div style="margin: 20px;"></div>
    <vi-form :model="formPage.form3"
      label-width="80px"
      :label-position="formPage.labelPosition">
      <vi-form-item label="姓名">
        <vi-input v-model="formPage.form3.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="学历">
        <vi-input v-model="formPage.form3.education"></vi-input>
      </vi-form-item>     
      <vi-form-item label="爱好">
        <vi-input v-model="formPage.form3.interest"></vi-input>
      </vi-form-item>    
    </vi-form>
<script>
  export default {
    data () {
      return {
        formPage: {
          labelPosition: 'right',
          form3: {
            name: '',
            education: '',
            interest: ''
          }
        }
      };
    }
  }
</script> 

```
:::



## 表单验证
使用表单校验功能注意：
* vi-form 组件提供model属性
* vi-form-item 组件提供prop属性
* **目前使用校验时，单选按钮请使用`<vi-radio-group>`包裹,多选按钮请用`<vi-checkbox-group>`包裹**，否则没触发实时校验（后续可考虑是否有必要改进）

<div class="demo-block">
    <vi-form :model="formPage.form4"
      label-width="100px"
      :rules="formPage.form4.rules"
      ref="ruleForm"
      :status-icon="true">
      <vi-form-item label="姓名" prop="name">
        <vi-input v-model="formPage.form4.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="性别" prop="gender">
        <vi-radio-group v-model="formPage.form4.gender">
          <vi-radio label="male"></vi-radio>
          <vi-radio label="female"></vi-radio>
        </vi-radio-group>
      </vi-form-item>
      <vi-form-item label="爱好" prop="interests">
        <vi-checkbox-group v-model="formPage.form4.interests">
          <vi-checkbox label="eating"></vi-checkbox>
          <vi-checkbox label="sleeping"></vi-checkbox>
          <vi-checkbox label="working"></vi-checkbox>
        </vi-checkbox-group>
      </vi-form-item>
      <vi-form-item>
        <vi-button type="primary" @click="submitForm('ruleForm')">立即创建</vi-button>
        <vi-button @click="resetForm('ruleForm')">重置</vi-button>
      </vi-form-item>
    </vi-form>
    
</div>



::: demo
```html
    <vi-form :model="formPage.form4"
      label-width="100px"
      :rules="formPage.form4.rules"
      ref="ruleForm">
      <vi-form-item label="姓名" prop="name">
        <vi-input v-model="formPage.form4.name"></vi-input>
      </vi-form-item>
      <vi-form-item label="性别" prop="gender">
        <vi-radio-group v-model="formPage.form4.gender">
          <vi-radio label="male"></vi-radio>
          <vi-radio label="female"></vi-radio>
        </vi-radio-group>
      </vi-form-item>
      <vi-form-item label="爱好" prop="interests">
        <vi-checkbox-group v-model="formPage.form4.interests">
          <vi-checkbox label="eating"></vi-checkbox>
          <vi-checkbox label="sleeping"></vi-checkbox>
          <vi-checkbox label="working"></vi-checkbox>
        </vi-checkbox-group>
      </vi-form-item>
      <vi-form-item>
        <vi-button type="primary" @click="submitForm('ruleForm')">立即创建</vi-button>
        <vi-button @click="resetForm('ruleForm')">重置</vi-button>
      </vi-form-item>
    </vi-form>
  <script>
  export default {
    data () {
      return {
        formPage: {
          form4: {
            name: '',
            gender: '',
            interests: [],
            rules: {
              name: [
                { required: true, message: '请输入名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              gender: [
                { required: true, message: '请选择性别', trigger: 'change' }
              ],
              interests: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
              ]
            }
        }
      }
    }
  },
  methods: {
    submitForm (formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  },
  resetForm (formName) {
    this.$refs[formName].resetFields()
  }
  }
}
</script>
```
:::

## 自定义校验规则 

<div class="demo-block">
    <vi-form :model="formPage.form5"
      label-width="100px"
      :rules="formPage.form5.rules"
      ref="ruleForm5">
      <vi-form-item label="姓名" prop="name">
        <vi-input v-model="formPage.form4.name"></vi-input>
      </vi-form-item>
      <vi-form-item>
        <vi-button type="primary" @click="submitForm('ruleForm5')">立即创建</vi-button>
        <vi-button @click="resetForm('ruleForm5')">重置</vi-button>
      </vi-form-item>
    </vi-form>
</div>



::: demo
```html
    <vi-form :model="formPage.form5"
      label-width="100px"
      :rules="formPage.form5.rules"
      ref="ruleForm5">
      <vi-form-item label="姓名" prop="name">
        <vi-input v-model="formPage.form4.name"></vi-input>
      </vi-form-item>
      <vi-form-item>
        <vi-button type="primary" @click="submitForm('ruleForm5')">立即创建</vi-button>
        <vi-button @click="resetForm('ruleForm5')">重置</vi-button>
      </vi-form-item>
    </vi-form>
  <script>
export default {
  data() {
    return {
      formPage: {
        form5: {
          name: '',
          rules: {
            name: [
              { validator: this.validatePass, trigger: 'blur' }
            ],
          }
        }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('不能为空'))
      } else {
        callback()
      }
    }
  }
}
</script>
```
:::


## 动态增减表单项

<div class="demo-block demo6">
  <vi-form :model="formPage.form6" label-width="80px" ref="dynamicForm" :rule="[]">
    <vi-form-item label="姓名" prop="name">
      <vi-input v-model="formPage.form6.name"></vi-input>
    </vi-form-item>
    <vi-form-item v-for="(domain, index) in formPage.form6.domains" 
      :label="'域名' + index" :key="domain.key">
      <vi-input v-model="domain.value"></vi-input>
      <vi-button @click.prevent="removeDomain(domain)">删除</vi-button>
    </vi-form-item>
    <vi-form-item>
      <vi-button type="primary" @click="submitForm('dynamicForm')">提交</vi-button>
      <vi-button @click="addDomain">新增域名</vi-button>
    </vi-form-item>
  </vi-form>
</div>




::: demo
```html
<div class="demo-block demo6">
  <vi-form :model="formPage.form6" label-width="80px" ref="dynamicForm" :rule="[]">
    <vi-form-item label="姓名" prop="name">
      <vi-input v-model="formPage.form6.name"></vi-input>
    </vi-form-item>

    <vi-form-item v-for="(domain, index) in formPage.form6.domains" :label="'域名' + index" :key="domain.key">
      <vi-input v-model="domain.value"></vi-input>
      <vi-button @click.prevent="removeDomain(domain)">删除</vi-button>
    </vi-form-item>
    <vi-form-item>
      <vi-button type="primary" @click="submitForm('dynamicForm')">提交</vi-button>
      <vi-button @click="addDomain">新增域名</vi-button>
    </vi-form-item>
  </vi-form>
</div>

<script>
  export default {
    data() {
      return {
        formPage: {
          form6: {
            name: '',
            domains: [{
              value: ''
            }]
          }
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      addDomain() {
        this.formPage.form6.domains.push({
          value: '',
          key: Date.now()
        })
      },
      removeDomain(item) {
        var domains = this.formPage.form6.domains
        var index = domains.indexOf(item)
        if (index !== -1) {
          domains.splice(index, 1)
        }
      }
    }
  }
</script>

```
:::


## 数字类型验证 

**数字类型的验证需要在 v-model 处加上 .number 的修饰符**
<div class="demo-block">
<vi-form :model="formPage.form7" ref="numberValidateForm"  label-position="left" label-width="60px" class="demo-ruleForm">
  <vi-form-item
    label="年龄"
    prop="age"
    :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
  >
    <vi-input type="age" v-model.number="formPage.form7.age" auto-complete="off"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button type="primary" @click="submitForm('numberValidateForm')">提交</vi-button>
    <vi-button @click="resetForm('numberValidateForm')">重置</vi-button>
  </vi-form-item>
</vi-form>
</div>

:::demo
```html
<div class="demo-block">
<vi-form :model="formPage.form7" ref="numberValidateForm"  label-position="left" label-width="60px" class="demo-ruleForm">
  <vi-form-item
    label="年龄"
    prop="age"
    :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
  >
    <vi-input type="age" v-model.number="formPage.form7.age" auto-complete="off"></vi-input>
  </vi-form-item>
  <vi-form-item>
    <vi-button type="primary" @click="submitForm('numberValidateForm')">提交</vi-button>
    <vi-button @click="resetForm('numberValidateForm')">重置</vi-button>
  </vi-form-item>
</vi-form>
</div>
<script>
  export default {
    data() {
      return {
        formPage: {
          form7: {
            age: ''
          }
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::


## 表单内组件尺寸控制 (说明文档待完善)

在`vi-form`和`vi-form-item`上设置size可控制组件尺寸

<div class="demo-block">
  <vi-form ref="form" :model="formPage.form8" label-width="80px" size="mini">
    <vi-form-item label="活动名称">
      <vi-input v-model="formPage.form8.name"></vi-input>
    </vi-form-item>
    <vi-form-item label="特殊资源">
      <vi-radio-group v-model="formPage.form8.resource" size="medium">
        <vi-radio border label="线上品牌商赞助"></vi-radio>
        <vi-radio border label="线下场地免费"></vi-radio>
      </vi-radio-group>
    </vi-form-item>
    <vi-form-item size="large">
      <vi-button type="primary" @click="submitForm">立即创建</vi-button>
      <vi-button>取消</vi-button>
    </vi-form-item>
  </vi-form>
</div>

:::demo
```html
<div class="demo-block">
  <vi-form ref="form" :model="formPage.form8" label-width="80px" size="mini">
    <vi-form-item label="活动名称">
      <vi-input v-model="formPage.form8.name"></vi-input>
    </vi-form-item>
    <vi-form-item label="特殊资源">
      <vi-radio-group v-model="formPage.form8.resource" size="medium">
        <vi-radio border label="线上品牌商赞助"></vi-radio>
        <vi-radio border label="线下场地免费"></vi-radio>
      </vi-radio-group>
    </vi-form-item>
    <vi-form-item size="large">
      <vi-button type="primary" @click="submitForm">立即创建</vi-button>
      <vi-button>取消</vi-button>
    </vi-form-item>
  </vi-form>
</div>
<script>
  export default {
    data() {
      return {
        formPage: {
          form8: {
          name: '',
          resource: ''
          }
        }
      }
    }
    
  }
</script>
```
:::


## Form Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
model | 表单数据对象 | object | --- | ---
rules | 表单验证规则 | object | --- | ---
rules.prop1[0].trigger | 表单验证触发时机 | change/blur | --- | ---
inline | 行内表单模式 | boolean | --- | false
label-position | 表单域标签的位置 | string | right/left/top	 | right
label-width | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | string | --- | ---
label-suffix | 表单域标签的后缀 | string | --- | ---
show-message | 是否显示校验错误信息 | boolean | --- | true
inline-message | 是否以行内形式展示校验信息 | boolean | --- | false
status-icon | 是否在输入框中显示校验结果反馈图标 | boolean | --- | false
validate-on-rule-change | 是否在 rules 属性改变后立即触发一次验证 | boolean | --- | true
size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | ---
disabled | 是否禁用该表单内的所有组件。若设置为 true，<br />则表单内组件上的 disabled 属性不再生效 | boolean | --- | false



## Form Methods

方法名 | 说明 | 参数
--- | --- | --- 
validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，<br />并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) 
validateField | 对部分表单字段进行校验的方法 | Function(prop: string, callback: Function(errorMessage: string)) 
resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | --- 
clearValidate | 移除整个表单的校验结果 | --- 


## Form Events

事件名称 | 说明 | 回调参数
--- | --- | --- 
validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过 


## Form-Item Attributes


参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 model 中的字段 | ---
label | 标签文本 | string | --- | ---
label-width | 表单域标签的的宽度，例如 '50px' | string | --- | ---
required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | --- | false
rules | 表单验证规则 | object | --- | ---
error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | string | --- | ---
show-message | 是否显示校验错误信息 | boolean | --- | true
inline-message | 是否以行内形式展示校验信息 | boolean | --- | false
size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | ---


## Form-Item Slot

slot name | 说明 
--- | --- 
--- | Form Item 的内容 
label | 标签文本的内容 


## Form-Item Methods

方法名 | 说明 | 参数
--- | --- | --- 
resetField | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | --- 


</article>