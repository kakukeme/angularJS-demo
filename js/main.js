/**
 * Created by kokia on 2017/3/1.
 */

angular.module('myApp', [])

    .controller('SignUpController', function($scope)
    {
        // 空对象
        $scope.userdata = {};

        $scope.submitForm = function()
        {
            // 打印表单输入的内容
            console.log($scope.userdata);

            if($scope.signUpForm.$invalid)
                alert('请检查您的信息');
            else
                alert('提交成功!');
        }

    })

    // 自己创建一条指令
    .directive('compare', function()
    {
        var o = {};     // 对象,返回这个对象

        // angular 命令是作用在元素和属性上的;
        o.strict = 'AE'
        o.scope = {
            orgText: '=compare'
        }
        o.require = 'ngModel';

        // 主函数 scope,元素,属性,controller
        o.link = function(scope, ele, att, con)
        {
            // controller的$validators加一个方法compare,
            // 回调函数的值v,就是用户输入的值;
            con.$validators.compare = function(v)
            {
                // 返回,之前输入的和现在输入的是否一样
                return v == scope.orgText
            }

            scope.$watch()

            // watch orgText,一旦orgText有变化就让controller开始验证
            scope.$watch('orgText', function()
            {
                con.$validate();

            })

        }

        return o;

    })