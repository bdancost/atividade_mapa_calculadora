
document.getElementById('calcular').addEventListener('click', function() {
    // Obtém os valores dos inputs e converte para números inteiros
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    
    const CarneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    
    const Frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    
    const Linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    
    const Refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    
    const Cerveja = (homens * 0.8) + (mulheres * 0.5);

    // Exibe os resultados na página
    document.getElementById('CarneBovina').textContent = `${CarneBovina.toFixed(1)}kg de Carne bovina`;
    document.getElementById('Frango').textContent = `${Frango.toFixed(1)}kg de Frango`;
    document.getElementById('Linguica').textContent = `${Linguica.toFixed(1)}kg de Linguiça`;
    document.getElementById('Refrigerante').textContent = `${Refrigerante.toFixed(1)}l de Refrigerante`;
    document.getElementById('Cerveja').textContent = `${Cerveja.toFixed(1)}l de Cerveja`;
});
