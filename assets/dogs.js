const dogs = [
    {
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRYYGRgaHBoaHBoaGBkaGhwcGBwaHBoaHBocIS4lHB4rHxocJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrISs0NDQ0NzQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKYBLwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EADYQAAEDAwIEBAUEAwABBQAAAAEAAhEDITEEQRJRYXEFIoGRobHB0fATMuHxBhRCFhVSYoKi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMhEjEEQVETFCJhBXEykaH/2gAMAwEAAhEDEQA/APUCy8rCEVwQypYAKzFReL6UuuBPouhewpU0ykyos5I+Ff8AR9kpqNCBK7JzAq3xJjYtlTZS2cdqaAaquoLq911NVJZdXFgxT9NaCYqBLPKYgT3i8pN1ckjYKWppElS0+nnZAB3mWjKTrmLQrJrdspPxFkEFTQ7K7us/TG11NwBWmUyqEKPHmhWum8Ma8AhwADSXXva5S9WgDcJrw8lpvjccwscvLjaezowceVSWgNKtkC3L+U5ptcQ0tfdMOoMg8J4g44Agi+Y54skNZRAdDTI9lMMluqKy4GlytMDqXTJ2VRUcndbUJsClW0zC6EcrQOmjtaVGnTvOyd4IbMq7FQq8ndLPRa1QuKHwJioWeVAJl9IqdPTXHxSegSt0AfTIAkZEqCutVQZwiDIm+QVVVGAG2FEZWa5cXF6C6GnLgum0tIbqj8NomZV7ScrMRxjQE6x6r6Tk6wosCb37IQGy25TYEWKjGMunGmEGm26Z4EAeqlRIW4WiVDGaIS2pfA6poqv1eVMmVFCVZ91VeJT+6Vaupk3SlehxWOFk2apHIa+oSZVfxLrdR4a1c5rtGWlXGSJaE33KU1NkyTCHUZIV2TQkxhJT9CgYUdNS3hNEwkCAGjGEDVMkXVvQbISmvjCCqKCpSi4WUgd005gKNS04JVCoVYyUZ1A2hTNOCmGMUtlJM03SO4Qb2BMjluqzU0yF0z6rGcIBlpHWevxtCRdpA8WzMrDG222+jqzcUkl37OcbpzN91uoyArivo+FK1KYHdbpnK0I6WnNiiamlDUWlTug6t2ytGbK56i1FLZWxTVIGQ4UzpaJLrY3J2Qyy0p/Tv4WHqlN60a4Ypy2A1zA1vDMqsDLp2vLp5oNJhlTBUtjzSuVosNM2Am2lLUTZM0wqMBqgnGOSdNMUigQyWqTAsa5EaEAEYUWUFFYkB6mHFTIlLtfKK0qUxtEiEpVbdNgoFRiUhoWcxLVaSeDVF7VlRdlVVZZVHiek4mTC6h1IFIaynDDaYuiikzzPXMLXEbLWnNk/4pVDyeiS0rMrVdEPsMx8bIjAHXQ3tKLSZAnknQrGKdOAkNW6xRm6qTySHiL79ClRSdijIBlWGiYDdVlFslX+loBtOZQyqIta1riXDa3dDrtEeXBOE0KUoYp3MhZ0rs1uXGhb9MmJTDGwi0z5wSnH0RkBCdEyVuyp1bvdVjmSVb6qmFWPMSVdk0L8BFkjqmiZCsK7Z9UrUo2VRlexSi4umVzQpohprZZZWmQ0RYU5o6HFmTfASgaU1onOa8EKZrTo1w1yV9GaqgB/WEp+mrysw8Bd8e6r3MM3ypxNtF+TFRegFHN1Z6anN0iWq10ERPJW9HMthXUVjGQmRVDtlBySE0SYUxTCXpNTbGwrZIXgUSEQFCcpGehaeuDumzqmDJH9rztmscw2O8qNbxF7jMwVMYtFSkmeiHXMieIRlJ1PGqYdE+vXK4F2qfzP9qP+wd1XEmzuj4wwuIDh+Bbo+INLoJtz7riWals3whajxDhmJupcRpnpDazXftIKR8Z1QZSc48oC4Ol428AQYIQtd4pVe2HOkfLslxY+SEK3ml05KLoqvBkSl2UnLdSm5UHZYnUtPIHktl7CM+nNVX6bpU6LyHXSsdDVeBcAC6rtSC4yPSU3W85x6olPTA+YEWF97bHHMQVnkyKPZvhwyn/iV2lpkvV+yGiNlTOLg42iCfZOaNxJum3qxKLui3psIAOAeyHUAR3VCWAAWjcYQKNKDDsgfl9lzRty5M7p0ofTSBUmb8lYNHlnolaDb/NWDGHhwtmcaRSapirNSz2V7rKZANspNlKTLsAfgUynxVm2HDzdFQ6g4Rxb4HTmpMpbHCfbRc94cWwI8oMxH1Q6D2lxDhF4siOSlseTBc0l7+RBmnADzFgJE+0JFzV1v+mS0/8ALbzJEQIzFzzXP+IUAxxAMp4cylJj8nA4xX6FtNRlwBXUafTUXlrQPMByg+8Ll2OOV0OmpMaCQS9wPmIkSeQ6JeTunbK8Gtql+7CeKUOGmAAJBkiZsqF97rrapD2OMRO8W7LmXjhPLon4knTT7H58FafoWYySnqFEoTYmysdNRkZXRJnmqPo1QokmAVJ9EjKZp6dwcOG/VMPpz33STJaFKbEZacFqbJ2KjHPUZK2AtlqAJOCi7Cm4IbgVaJIcSg4ojmFDcxFhQJ70vVJKO9qG5iAE6gIQ2PKf4AUB1KCkxhqD+aIWyeiDTF02KZIvKhlI05o7qseZfAySrEDIBSGmAa53FkXHdZzlxjaOjDFSklLotdHoi74W/Mro2aQQG8LZwSeW+1+yS8GPlBdJ3kiMjb3+avG1G8Ikdr3ucX9F4+bNKUt+j2IwWJVH2c34x4Xwy9pAAIluBfdJ6HItjC6bxDzsLXRuQZg22I3VLpNMRxDkuvBl5Y2pPZzZMbWRSSHm+ZnEW4wM7/b5I9Vg4S8xMZ/OqjR/Y4zi/P8AMJhvmYRsZEj+Vg5SX9WdM0vXZTaamSLT/SeOpAbcX2U3PawAAW3vn7ITqXEeISNxb1XV9xF7a/o5Ps5ap/2VepqPMA8pH9JapxCLzfHNWp05dcgZA7+yS8R05a/YAR7Qs1k5ypnU8Uccfx7NPe0tvY8lDw3S8LjIknblfJIwoMBJPM/b5pvw8EPDQHDa+4zhTN8U0maQXJqTXQPWua6B5pDpE/tkKorMLnHiueZXQ6zSOknhAAnG6S/1GiJdJtZb+M48dHH5qbl+ijrUoFk54LLqgaSRPWL/AHWailxOgXupfo8Dw64g5zHZbzakq/Rz4FKL5fDOjbT4bYvgdeY9lRavSOdxOuYPL5rpeNpaHC9htdKueBJLYHOclcWKbi79nqZccckafRyopwd1c6FstsheJ1mGwEG23zQ/CiS8Cd/fovRUuUbejxcmNQlSdo6mloS6mCwXEykmU7rpfCYA4TywkvFdFwGRgkwlGXoxlE57VMAdZKF8lPaloCRaFRNEy5baQhPKi0p2JosG01n6aMFjkrL4i72BBcxHeokIsOIu6neVn6SmSpAI5BxAPogJQU5KsazhCUpvbKLDiT/1cFSc/hEIpqKu1dTkpspRCNcCbLdbQSfKMqGkEETurX9S0f8AWBzWU5UjfHC5UG8L1B4Q1wkTHt03V1p9MHmXghsbZycqsoaWIME8xztlW+iqObG2c57fD4rxsjTlaPWyWo6eyq8fHB5aYgQJNpM/L0Q/D2lrON+Tf6XVx4gRUs4CIJkZta0hUb38I4bkWjGx5LfDNuNJbsiMXJXJ+iz07BGbG+LXCnSouaIiBNr5H4FvTGCYGYIOREAI4BLgSRJ+ibbVp9MTdu/gV/SBcSRf4WsjOpktgHzD5bJlrYa4n+dylBrADbkPpKznt69FKUpLXorKjXh0dJ+6lU0PFJ3+aarGTIHOZ/pVjtU8OLW2AmepP0VKb9fBpw5BmUwxznGwteOWR7rbT+qSWgkg2tHr1WtO8OaQOLmSb3JvZG0usDA6QCRN9r9Nz0WTbtv2aU4rS2Kauu5rT5gTFwdojA9VTPqkn7K58T0xeA4TBuOXSN0mNM/hteDj87rs8ecYx2c/kY3NWiPh03sJ5wSVpzfOOP8AaPS/JPeHacgOMSel7clLWU5aHbfLqUvqr6jSKhjvGk+0FoPYABscHl0Kh4kxowQGwI75+SAKLWtkOJiAYv8A33CK2XeV+DHmzP2wqjH8rRUn6KurpwZ35HmmfCWsY64nvhEdpuGBBi5/PZMUaTcwuxPR5uSKvo6XROBAIKb8TpcbJb+4XCrPDoAjZX9FsthKMqZzzjo878TpOYSNjcfZVhqLvvGfCuMGBI+I6ritbpCx0FbJ2c7QqXLAVnAs4UxFr+otOclw/qpcaKKsKSoPehF5Wi5FDDNUC66ix0LT+aQEdQbJQMINk3lpsDA3yhUqcuDd/n0SbpMuEW5JfJpzXAQcpamwuJnZX1bSl7RxG9hcXStDSEPLSIzjEf0uf6ycX8nevEcZr4NCgOAkXMSOnZF8J4QS4jIgGYIxz7KNcOYA0TAmTbAW9BTiOXuJ5LLhzi1ZtyjGfRdafUuMQBHMyeiL+rcgGYyBsgsFhaPsmGM32IiPzouWWGno6G49gDUcSQBA3Ej85obaMyS0ET/d1as04AkAE9byi6cta0hzRJOLxt/NlXGUVpGcsqqkitJ4eGJsLg56fBF0taYMR+BZqiCZaCJi3Lb3Vaxz2vLbzkcvdXCFrfYWmkXTnkkzYb9Ysq3VEOFue6lTqOdPFuPlb3UdVRJAIFh1ufss9KWyoRogHw2JJIF8fNL1GcThIAEE87jHdRa4GRFz8sptlIuJdePwW6LOSS2bp8QLG2dwgGbSBfe9s/wnPDtKA3idDjYmZiTsOqC/TFoIa6IuOin4e4sYQRb1zknrdZtWrTIm246D17wZmBvy6JKlSyT1/j2RwZuDGfwo+nYAYIPP3IkIX4oV8UB8L0/A9xIkOBHNNVKbYcIvy5/BG/TM2gXseRRKrgQHRwmIM45eqG23Zzyn+Vo5StLDLpDIAgbT88rGao8QIbAkACZkX591Z6yjxWG+fz0VW+kWzmRgnlIx7Belhacd9hkck7XRZV28TCeG+OdgkNJqIMZun9O/yEA+a/v9FUskXIwYPobrbEtNM5s8tpo6HTaoNMRldBoq4cBzj6rj9M4cJvi/8K701UiC3MTHO+PVRJ8WTx5RL91RpbB5x6xK43/IWNB9YV83VeZ0OnDoPI7TuL+k9FzvjeokkHED4wfqtYSs5pRooXt+qiacCUWm+WzN1Gq6Bz6LVGDQqa/RTGotYLTP0Rl5NxgH1yEJ9WmDZxI6BaLfpg40rtf7DHUKQ1XZLUtTSBlwc7pYfGfyFlDxCk0uljjOLiR9u/RJp+kylx1bSHtPVBDnH/kYAyJutva7hJjGem6BpvHGMBDaIg588kjkZCL/AOQNMkUgJzJkd/gsZRyctLRvGWCvyl/wKCQxsSZuQB1gXzsnvD9G6Zf0sY2v7zCpn+PvwxrGgbRKB/5BWbuD3A+iiWHNKLSpFwzYIyTbbr9aOyq02ht9jb2/hVzdSHuBae1r8j+Fc/qf8orObwENHW8/YdlX0/GajAQ2AD+QN4XPDwslO+zpX8hiT9noDKYJEiQeYx1Rn0ADEAAe39Lh9B4xXcXS+IAt26LVfxWsCT+o8k//ACPwGAiPgZLu0RL+Qx3pM7by/wDQjh+WEQtJkkWJx3P9+y4qhqaj7F7jcE3zBELqdFpXNbLiTIwSt14rW2zOXnp9I6SkLRH9LVQNvxCw3VLU1xYyZxzVJ4n4s5/CZMXty+5sm/FbVJmX3Ue6Z1TqjXHYRYfQpM0QXcU3vJ7/AMyuWZ4k8H9xvzPLupO8UqSBxYIPISofiTXTNo+bjS6Z07XBpM3znYZ+a06qOFsY3M4GNyuN1nijySC8mYnsDhI1vEH28x6G/SPks34Dl7K++hd0ztqml8znAgAkXtiRv8IVmGjhsfTp915r/wCtagEQ827EfFTHjtYmS8kxtbnmO6zf8fkftFPzscl70d54i7yu4QJuG4kwY+KV/SJLREuAEkZEgA25T8lyFXxyq4j9ttzM3+nRSf8A5BV4i4lsmMCMQheBlS1RcfOxLVs7mlp2w4tvho3sLn1Uy4ZGf5grhNL/AJLVYIaxpzkm8yT9PZDf/kNaR5u4GMnMi+fioXgZW9kvzcXdtno9KqCy/lJ3FrnHf+Vn6he0C0tI+FviVwrfF6jy0k2aS4DIE7fH4Kx0/j722c1pBviL9ef8LR+DOKtdmS8rE2dJVlwnBBgn1Ej0+ardcWyATAsDyG5+nwVe7/I3RHCAJJ67Z6qrf4k97wXGwAtgXmfgPkrx+Lki7ZT8vHVJ2Xga4N4m3HMfboEqxv7syCZn3R/C9awSHEQ4/wDRECZJA90tqdUwglh8wt3zn2W8VJNpoJzhKKaYVjuG/pHwn86q3o6rzGbXH/6j+VStqNcQOKLAwY/JP3Temgh7pkAi2cXAEdD8VjmTezXFxqkWDKhfa+OXcwD6R6Ko8bJESYnPcgT+dk7QeQ4XNpHuXT8CR6Ks8RqlzuN1wLRva9/SPirw3Zz50khOnYERv85/PRbe/JzH3AUNMJDcSI+M/wAFGdwkxbzAujpNvofVdBxs5lzzzWuI81ogqTaZ6e8Lqs5aNOf1UWtc7ErT2GYRtKQ0ybosKN8EDKhJnNkWo6cCEEnsiwoI0oLxdEa7mpUmGT+dyk2CQq93VRa7ffb89046lIB9D0yQe2fZYyl5YaLknf8A5Hfmd+hS5DSB1KjWiGi+527IjS6xIz+DspN0pjzRJtgxHtPqnKfBMkjbc7elknIaiG0TyD6g/FdrSl7LWI97LiNNWYBYiftlWdHxWoyzOE8QtPz9M+iALavSLiTMhpPuMqm1ga2+23dMs8TlrWuEAWsQZvckx+Eqj8V1DnSQbDbZF0KrBjUjiJmy1VryBw878yq46kxkZjIHYX2W2ViRntHx7iEuRfEZebyTv/P1UY4jJS5cCOx5fT4LbHRvZNMTQZ9KRMQhtZCK6vMS6bx+SobQIxeZ3vb4JtiSBPZdSNPn3WMfe4+P2TTmOi4Hr+XS5IfFi4pqJYBtP58kaSNx7/ZDfWvn3CXIdDejff6Rb+U6HcRvtEfKSqujWi4MfmwRW6q0Y9E00KmH1L7wOfw/IWUSA4nYCPbP51S7q/mkxtstGuGi/ffnH0SsdFjNsDkBPMD4qLRa/P5myFR1TL3k7SPj+dVt+uY2bg7m3IT802xJDVMRJJjERmQbe0ApjSVHhpbt5Zv1MmOuFWnWhrbEf88+k/RGfq2NYIu6IMdS0zjO3uspU+zSMmuiwZrH8IbIl3ECcmASXE9rj0UX12va7ikZI/8AqAG+8NHuqZ2o8zmlwm9xiXOv3M+lkwK7AC2TkCY5ZPzUqK9Gsssn2O1XNYxtxxG/aLi/cwo03N4ouBYWyRBI+SV1ddhBPFJJbFjYA3+Zv0Qm1mkkh4FwPgT0nGydEWABG3vv6IBYDvdNOa1osCTzOPT+Uq6Tt6ibfRbJmDRE0539f5UmtAEkn86+i3RocToiT8B1KK6iWuIi05JGENhQEjqscy3qeiOyk+SA0YyCpVdM5pA4DgEkg7iSJxuUWFACIMGxsPpYbKVaItkxnlkCfzCjDpFvhf16ooaTJ97Y6/D4IAjReZxkY2wh6ioRAaIBHXn8MY6ph2mIEmwIN+cZUKdIvsBYX/kpNoqhJznn9zjEHJuQbSAspzvaQRme8n0TrfCXvBdgczYDkIUnaB7C0OAuJBBkbhLkh0ytqMcDmPvzjeeScY8hl3XGB0HP0Rn6V03E7ycxa11LiY0iQCQMTYQd+eClyChX/bcLmYdeJ6fJC1NRzwQLXnr77WTusqtjy8JuBYyZMzacQlGtDZuBjLh02E90rsKorS13XPIX54RKZ7YgdJ6+6P5CSC8ScmQAJ/J9UFzGgQHA35me9hdMAjXXjmYKISIHPfHMj8IQqNObWJwBB2xkZifZNvoubwlzTIvAEgz+dr+qXQdgA6OuP77I7QDcQSIn1HTCTruIi+MiCMWEgi4gfBSZWAJFyIxj1v1hOmx2kOvBnlAM97+yiWlu/eYIsfwehS/+4RPlJ32625/0t/7U3AvtfmhRYnJDx4Sy+QM+oSbyRENETH3scZQhqDER9ufphRfqeYt2kp8WLkMsa50ECSSeWwB9PkiveBMRIsbwLWMT8+/RInW+UNFh0kE99+XshnUgAnh352uepS4sakh6jVmDa/qL8+WTZErMIEuH7oHz/be/fqkaGom3Dbfl6xsi1/FHnkfSNu8dLIp2O1RsUiTIcb/8ydp55P3UnUiRcEXzHLOUm7VuIAADTN7XHqeyw6l2A8iMW63viUbFaGqtFwbYSOZPL5Stf9ifNcSIMHYg9VXvL7y8ki2ZieoKiGPMO43d4m/UiJsp4sfJeiwrl4Ji95PY/PPrKizUmA2wJ6ARcSetrqudUeXESdgJ4gLcuVvqpPEQeIknEfVOgci7qVePiaBBN7DkdwcZn0QK1J1oGZ81oF4v7R6qsp6lweDxEctxsY+C23Uv2dbsCekixCXFhyR3Y0rDYyd9gPgtf67RaAQNi0fmyxYgdExTaNonkPvssrkDAyBy3k8lixIYNlaRIAaDyz1RadSb7OOMYA9wsWIYIKNO02OLwAPrP0S7qbWzaI2BtywtrELsGCLQROeUjE2zJnKUrahzXhogTInPLssWJoTNf7ZdcWgx9rKrfrHyQXuIvaeHAk3F7x8VtYnFbJbB1LtJAz/7iSRBmx7pKhSLnwLWMyZtBHJYsWnohdkGiBcmLGAbcXmuRvZpHr3RadJt4mRmfTH8rSxSykJVnSZ/IUH2jt8isWJiLHRVoAJkyYieY55xv/a1X1RIBgW58sQPdYsUIp9BIMTO8C09zBUqlM3AiYv2FzeJJMDktrFSJBVAG23tjF7+yG0uMXWLFQgwi1ze2yi5kiW9ckzaDt3WLEDACl29fsiU6AIz2sIwsWIYBX0hYQN8dLz3QOME8IF5iSsWJARriDHX75S9StiLWm2bHutrEgMq3zcn72RKE3wYNpk7d/yyxYgDTs8p5Gyl5cGZ59569lixAGUhOQORyeV8okcNgSDAsP2/dYsQM//Z",
        name: "Zalecane działania",
        desc: "Zasady postępowania na wypadek pożaru",
        nav: "Deu"
    },
    {
        url: "https://www.luxmed.pl/assets/media/pierwsza%20pomoc.jpg%3Ffm=webp&q=90&lossless=0",
        name: "Pierwsza pomoc",
        desc: "Jak udzielić pierwszej pomocy",
        nav: "First"
    },
];

export { dogs};