import yaml, sys, csv

def create_instructions(config, depth_level=0):
    if depth_level>5:
        depth_level=5
    output=""
    if config is None:
        return output
    if isinstance(config, dict):
        for key in config:
            if key!="col":
                output+=("#"*(depth_level+1)+" "+key+"\n")
                output+=(create_instructions(config[key],depth_level=depth_level+1))
            else:
                output+="<details>\n"
                output+=(create_instructions(config[key],depth_level=depth_level+1))
                output+="\n</details>\n"
    elif isinstance(config, list):
        for entry in config:
            entry_str=create_instructions(entry,depth_level=depth_level+1)
            output+="\n"+(entry_str)+"\n"
    elif isinstance(config,str):
        if ".yaml" in config:
            with open(config, "r") as config_file:
                indict=yaml.safe_load(config_file)
                nest_out=create_instructions(indict, depth_level=depth_level+1)
                output+=nest_out
        elif ".md" in config:
            with open(config, "r") as instruction_file:
                instr_lines=instruction_file.readlines()
                for line in instr_lines:
                    if line[0]=="#":
                        line="#"*depth_level+line
                    output+=line
                # output+=instr_lines
        elif ".csv" in config:
            if "," in config:
                config_split=config.split(",")
                csv_filename=config_split[0]
                rows=(int(config_split[1]),int(config_split[2]))
                cols=(int(config_split[3]),int(config_split[4]))
                csv_reader = csv.reader(open(config_split[0], encoding="UTF-8"))
                splitline_added=False
                for line_num,line in enumerate(csv_reader):
                    if line_num>=rows[0] or rows[0]==-1:
                        if line_num<=rows[1] or rows[1]==-1:
                            outline="\n|"
                            line_length=0
                            for col_num, entry in enumerate(line):
                                if col_num>=cols[0] or cols[0]==-1:
                                    if col_num<=cols[1] or cols[1]==-1:
                                        outline+=" "+entry+" |"
                                        if not splitline_added:
                                            line_length+=1
                            output+=outline
                            if not splitline_added:
                                splitline= "\n|"+("-"*5+"|")*line_length
                                output+=splitline
                                splitline_added=True


            else:
                csv_reader = csv.reader(open(config, encoding="UTF-8"))

                splitline_added=False
                for line in csv_reader:
                    outline="\n|"
                    for entry in line:
                        outline+=" "+entry+" |"
                    output+=outline
                    if not splitline_added:
                        splitline= "\n|"+("-"*5+"|")*len(line)
                        output+=splitline
                        splitline_added=True
        else:
            output+=config
    else:
        raise(Exception(str(type(config))+" not yet supported object"))
    output+="\n"
    return output

if __name__ == '__main__':
    with open(sys.argv[1],"r") as config_file:
        config=yaml.safe_load(config_file)
        print(create_instructions(config))