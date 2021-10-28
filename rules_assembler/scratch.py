import yaml, sys

def create_instructions(config, depth_level=0):
    output=""
    if isinstance(config, dict):
        for key in config:
            output+=("#"*(depth_level+1)+" "+key+"\n")
            output+=(create_instructions(config[key],depth_level=depth_level+1))
    elif isinstance(config, list):
        for entry in config:
            entry_str=create_instructions(entry,depth_level=depth_level+1)
            output+=("\n- "+entry_str)
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
        else:
            output+=config
    else:
        raise(Exception(str(type(config))+" not yet supported object"))
    return output

if __name__ == '__main__':
    with open(sys.argv[1],"r") as config_file:
        config=yaml.safe_load(config_file)
        print(create_instructions(config))