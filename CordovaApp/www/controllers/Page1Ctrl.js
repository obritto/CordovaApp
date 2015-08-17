app.controller("Page1Ctrl", function ($scope) {
    $scope.msg = "pagina 1/tela 1";

    $scope.descricao = "";
    $scope.quantidade = 1;
    $scope.valor = 5;


    $scope.lista = [
        { descricao: 'TESTE', quant: 1, valor: 2.5 },
        { descricao: 'TESTE 2', quant: 3, valor: 5 },

    ];


    $scope.add = function () {
        $scope.lista.push({ descricao: $scope.descricao, quant: $scope.quantidade, valor: $scope.valor });
    };

    $scope.remove = function (it) {
        $scope.msg = it;

        $scope.lista.splice(it, 1);
    };

});