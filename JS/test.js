function ft_print_comb() {
    let a = [0, 0, 0];
    while (a[0] <= 7) {
      a[1] = a[0] + 1;
      while (a[1] <= 8) {
        a[2] = a[1] + 1;
        while (a[2] <= 9) {
          console.log(`${a[0]}${a[1]}${a[2]}`);
          a[2]++;
        }
        a[1]++;
      }
      a[0]++;
    }
  }
 
  ft_print_comb();
