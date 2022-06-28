echo "11111111" | kynnod keys add v1 --recover --keystore /scripts/keystore1.json
echo "11111111" | kynnod keys add v2 --recover --keystore /scripts/keystore2.json
kynnod init --chain-id test --moniker test
echo "11111111" | kynnod gentx --name v1
kynnod add-genesis-account faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7 100000000akynno
kynnod add-genesis-account faa1gwr3espfjtz9su9x40p635dgfvm4ph9v6ydky5 100000000akynno
kynnod collect-gentxs
sed -i 's/faa108w3x8/faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7/g' ~/.kynnod/config/genesis.json