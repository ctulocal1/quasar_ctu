    computedSalary() {
      const cats = salaryJSON.children;
      cats.forEach( () => {
        if (cat.choice === data(category)) {
          const lns = cat.children;
          for (const ln of lns) {
            if (ln.choice === lane) {
              const yrs = ln.children;
              for (const yr of yrs) {
                if (yr.choice === year) {
                  const stps = yr.children;
                  for (const stp of stps) {
                    if ('Step '+stp.choice === step) {
                      return stp.amount;
                    }
                  }
                }
              }
            }
          }
        }
      }
      );
    },
